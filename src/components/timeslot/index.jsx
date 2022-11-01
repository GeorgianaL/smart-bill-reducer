import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Input from "../input";

const TimeSlot = ({ from, to, onChange }) => (
  <Grid container spacing={2} alignItems="end">
    <Grid item>
      <Input
        type="time"
        value={from}
        onChange={(e) => onChange("startHour", e.target.value)}
        style={{
          width: 150,
        }}
      ></Input>
    </Grid>
    <Grid item>
      <Typography variant="subtitle1">To</Typography>
    </Grid>
    <Grid item>
      <Input
        type="time"
        value={to}
        onChange={(e) => onChange("endHour", e.target.value)}
        style={{
          width: 150,
        }}
      ></Input>
    </Grid>
  </Grid>
);

export default TimeSlot;
