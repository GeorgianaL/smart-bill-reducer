import React from "react";
import Grid from "@mui/material/Grid";
import Input from "../input";

const TimeSlot = ({ from, to }) => (
  <Grid container direction="row" spacing={2} alignItems="center">
    <Grid item>
      <Input type="time" value={from}></Input>
    </Grid>
    <Grid item> To </Grid>
    <Grid item>
      <Input type="time" value={to}></Input>
    </Grid>
  </Grid>
);

export default TimeSlot;
