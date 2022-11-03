import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, IconButton } from "@mui/material";
import Input from "../input";
import deleteIcon from "../../assets/delete-bin.svg";

const TimeSlot = ({ from, to, onChange, onRemove }) => (
  <Grid container spacing={2} alignItems="end">
    <Grid item sx={{ width: 160 }}>
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
    <Grid item sx={{ width: 160 }}>
      <Input
        type="time"
        value={to}
        onChange={(e) => onChange("endHour", e.target.value)}
        style={{
          width: 150,
        }}
      ></Input>
    </Grid>
    {onRemove && (
      <Grid item xs={1}>
        <IconButton
          aria-label="delete-floor"
          onClick={onRemove}
          className="delete"
        >
          <img src={deleteIcon} alt="delete" />
        </IconButton>
      </Grid>
    )}
  </Grid>
);

export default TimeSlot;
