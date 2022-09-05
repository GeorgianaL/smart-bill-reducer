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
    zIndex: 5,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  })}
`;

const Editor = ({ title, type, zones, onChange, onSubmit, ...props }) => {
  const { annotation } = props;
  if (!annotation.geometry) return null;

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
          <Grid item>
            <Typography variant="body1">Area</Typography>
            <Select
              values={zones}
              onChange={(zoneId) => {
                onChange({
                  ...annotation,
                  data: {
                    ...annotation.data,
                    zoneId: type === SENSOR ? zoneId : null,
                  },
                });
              }}
            />
          </Grid>
        )}
        {type === RELAY && (
          <Grid item>
            <Typography variant="body1">Select linked zones</Typography>
            <Select
              multiple
              values={zones}
              value={
                annotation.data && annotation.data.zoneIds
                  ? annotation.data.zoneIds
                  : []
              }
              onChange={(zoneIds) => {
                onChange({
                  ...annotation,
                  data: {
                    ...annotation.data,
                    zoneIds:
                      annotation.data && annotation.data.zoneIds ? zoneIds : [],
                  },
                });
              }}
            />
          </Grid>
        )}
        <Grid item>
          <Grid container direction="row" spacing={2}>
            <Grid item>
              <Button onClick={onSubmit} variant="outlined" size="small">
                Discard
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={onSubmit}
                variant="contained"
                size="small"
                color="primary"
              >
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
