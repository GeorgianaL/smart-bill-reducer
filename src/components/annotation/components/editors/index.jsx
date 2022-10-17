import React from "react";
import styled from "styled-components";
import { Grid, Typography, Button } from "@mui/material";
import DeviceCreator from "./DeviceCreator";
import Select from "../../../select";
import { SENSOR, RELAY } from "../../../../utils/config";

const Container = styled.div`
  ${(props) => ({
    backgroundColor: "white",
    transformPrigin: "top left",
    overflow: "hidden",
    position: "absolute",
    padding: 20,
    left: `${props.geometry.x}%`,
    top: `${props.geometry.y + props.geometry.height + 2}%`,
    width: 300,
    borderRadius: 6,
    zIndex: 7,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  })}
`;

const Editor = ({ title, type, zones, onChange, onSubmit, ...props }) => {
  const { annotation } = props;
  if (!annotation.geometry) return null;

  const {
    selection: { zoneId },
  } = annotation;

  return (
    <Container geometry={annotation.geometry}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="body1">{title}</Typography>
        </Grid>
        <Grid item>
          <DeviceCreator onChange={onChange} {...props} />
        </Grid>
        {type === SENSOR && (
          <>
            <Grid item>
              <Typography variant="body1">Area</Typography>
            </Grid>
            <Grid item>
              <Select
                variant="filled"
                values={zones}
                value={annotation.selection.zoneId}
                onChange={(zoneId) => {
                  console.log("zone id este", zoneId);
                  onChange({
                    ...annotation,
                    selection: {
                      ...annotation.selection,
                      zoneId,
                    },
                  });
                }}
              />
            </Grid>
          </>
        )}
        {type === RELAY && (
          <>
            <Grid item>
              <Typography variant="body1">Select linked zones</Typography>
            </Grid>
            <Grid item>
              <Select
                multiple
                values={zones}
                variant="filled"
                value={
                  Array.isArray(zoneId)
                    ? zoneId
                    : [zones.find((zone) => zone.id === zoneId)]
                }
                onChange={(zoneId) => {
                  onChange({
                    ...annotation,
                    selection: {
                      ...annotation.selection,
                      zoneId,
                    },
                  });
                }}
              />
            </Grid>
          </>
        )}
        <Grid item>
          <Grid container direction="row" spacing={2}>
            {/* <Grid item>
              <Button onClick={onSubmit} variant="outlined" size="small">
                Discard
              </Button>
            </Grid> */}
            <Grid item>
              <Button onClick={onSubmit} variant="contained" color="primary">
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

Editor.defaultProps = {
  zones: [],
};

export default Editor;
