import React from "react";
import { Grid, Typography } from "@mui/material";

function Tooltip(props) {
  const { data, geometry } = props.annotation;
  if (!geometry) return null;

  const { name } = data;

  return (
    <Grid
      style={{
        top: `${geometry.y + geometry.height / 2 + 10}%`,
        left: `${geometry.x + geometry.width / 2}%`,
        borderRadius: 6,
        position: "absolute",
        transform: "translate3d(-50%, -50%, 0)",
        minWidth: 160,
        backgroundColor: "white",
        padding: "10px 20px",
        zIndex: 6,
      }}
    >
      <Grid item>
        <Typography variant="subtitle2" style={{ fontWeight: 700 }}>
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Tooltip;
