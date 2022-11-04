import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "../../button";

import deleteIcon from "../../../assets/delete-bin.svg";

const getMarginTop = ({ y, height }) => {
  if (height) return y + height / 2 + 10;
  return y + 10;
};

const getMarginLeft = ({ x, width }) => {
  if (width) return x + width / 2;
  return x;
};

function Tooltip(props) {
  const { data, geometry } = props.annotation;
  if (!geometry) return null;

  const { name, id, controlType } = data;
  console.log(name, geometry);
  return (
    <Grid
      style={{
        top: getMarginTop({ ...geometry }),
        left: getMarginLeft({ ...geometry }),
        borderRadius: 6,
        position: "absolute",
        transform: "translate3d(-50%, -50%, 0)",
        minWidth: 160,
        backgroundColor: "white",
        padding: "10px 20px",
        zIndex: 6,
      }}
    >
      <Grid item sx={{ paddingBottom: 1 }}>
        <Typography variant="subtitle2" style={{ fontWeight: 700 }}>
          {name}
        </Typography>
        <Typography variant="body2" style={{ fontSize: 12 }}>
          {id}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          startIcon={
            <img src={deleteIcon} alt="delete" style={{ width: 16 }} />
          }
          sx={{ color: "black" }}
          onClick={() => props.onDelete(id, controlType)}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}

export default Tooltip;
