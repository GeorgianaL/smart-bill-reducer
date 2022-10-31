import React from "react";
import { Button, Grid, Typography } from "@mui/material";

import scheduleImage from "../../assets/scheduler.svg";

const EmptySchedules = ({ onCreateSchedule }) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    spacing={2}
    sx={{
      p: 12,
      "@media (max-width:480px)": {
        p: 1,
        img: {
          width: 200,
          height: 150,
        },
      },
    }}
  >
    <Grid item>
      <img src={scheduleImage} alt="schedule" />
    </Grid>
    <Grid item>
      <Typography variant="h5">
        Start by creating your first schedule
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="subtitle1">
        Create a schedule by choosing which floor and zone you wish to apply it
        to. Schedule in detail the active hours.
      </Typography>
    </Grid>
    <Grid item>
      <Button color="primary" variant="contained" onClick={onCreateSchedule}>
        Create schedule
      </Button>
    </Grid>
  </Grid>
);

export default EmptySchedules;
