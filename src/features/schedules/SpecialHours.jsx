import React from "react";
import { Grid } from "@mui/material";

const SpecialHours = ({ title, subtitle }) => {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item>{title}</Grid>
      <Grid item>{subtitle}</Grid>
    </Grid>
  );
};

export default SpecialHours;
