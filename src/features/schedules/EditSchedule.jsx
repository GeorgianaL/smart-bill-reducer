import React from "react";
import { Button as ButtonBase, Grid, Typography } from "@mui/material";
import Page, { FloorSelector, DaySelector } from "../page";
import Card from "../../components/card";
import withNavigationBar from "../../hoc/withNavigationBar";
import Input from "../../components/input";
import TimeSlot from "../../components/timeslot";

const EditSchedule = ({ onChange }) => {
  return (
    <Page>
      <Card>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h5">Create Schedules</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              Select the power on timeslots for your days.
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <Input
                  required
                  id="entity-name"
                  placeholder="Schedule name"
                  onChange={(e) => onChange("name", e.target.value)}
                  value={""}
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    <FloorSelector variant="outlined" />
                  </Grid>
                  <Grid item>
                    <DaySelector variant="outlined" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={2}>
                  <Grid item>
                    <DaySelector variant="outlined" />
                  </Grid>
                  <Grid item>
                    <TimeSlot
                    //   from={schedule.from}
                    //   to={schedule.to}
                    //   onChange={(field, value) =>
                    //     onChangeSchedule(schedule.id, field, value)
                    //   }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};

export default withNavigationBar(EditSchedule);
