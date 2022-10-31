import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Typography } from "@mui/material";
import Page, { FloorSelector } from "../page";
import Card from "../../components/card";
import withNavigationBar from "../../hoc/withNavigationBar";
import EmptySchedules from "./EmptySchedules";
import Schedule from "../../components/schedule";
import { getSchedules, getFloors } from "../../actions";

import { schedules } from "../../mock/schedules";

const Schedules = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { schedules, loading, error } = useSelector((state) => state.schedules);

  const goToCreateSchedule = () => {
    navigate("/schedules/edit");
  };

  // if (loading || error)
  //   return <Typography variant="h6">Loading ...</Typography>;
  return (
    <Page title="Schedules">
      <Card>
        {schedules.length === 0 ? (
          <EmptySchedules onCreateSchedule={goToCreateSchedule} />
        ) : (
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h5">Your schedules</Typography>
              <Typography variant="subtitle1">
                Your personalized schedule for your buildings
              </Typography>
            </Grid>
            {schedules.map((schedule) => (
              <Grid item key={schedule.name} sx={{ marginTop: 2 }}>
                <Schedule {...schedule} />
              </Grid>
            ))}
          </Grid>
        )}
      </Card>
    </Page>
  );
};

export default withNavigationBar(Schedules);
