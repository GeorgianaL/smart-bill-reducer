import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Typography } from "@mui/material";
import Page, { FloorSelector } from "../page";
import Card from "../../components/card";
import withNavigationBar from "../../hoc/withNavigationBar";

import { getSchedules, getFloors } from "../../actions";

import scheduleImage from "../../assets/scheduler.svg";

import { schedules } from "../../mock/schedules";

const Schedules = () => {
  const dispatch = useDispatch();

  const { schedules, loading, error } = useSelector((state) => state.schedules);

  // if (loading || error)
  //   return <Typography variant="h6">Loading ...</Typography>;
  return (
    <Page title="Schedules">
      <Card>
        {schedules.length === 0 && (
          <Grid
            container
            direction="column"
            alignItems="center"
            spacing={2}
            sx={{ p: 12 }}
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
                Create a schedule by choosing which floor and zone you wish to
                apply it to. Schedule in detail the active hours.
              </Typography>
            </Grid>
            <Grid item>
              <Button color="primary" variant="contained">
                Create schedule
              </Button>
            </Grid>
          </Grid>
        )}
      </Card>
    </Page>
  );
};

export default withNavigationBar(Schedules);
