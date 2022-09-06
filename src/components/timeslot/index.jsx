import React from "react";
import Grid from "@mui/material/Grid";
import Input from "../input";

const TimeSlot = ({ from, to, onChange }) => (
  <Grid container direction="row" spacing={2} alignItems="center">
    <Grid item>
      <Input
        type="time"
        value={from}
        onChange={(e) => onChange("from", e.target.value)}
      ></Input>
    </Grid>
    <Grid item> To </Grid>
    <Grid item>
      <Input
        type="time"
        value={to}
        onChange={(e) => onChange("to", e.target.value)}
      ></Input>
    </Grid>
  </Grid>
);

export default TimeSlot;
