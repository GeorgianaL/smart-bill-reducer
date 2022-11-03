import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Typography, CircularProgress } from "@mui/material";
import Page from "../page";
import Card from "../../components/card";
import withNavigationBar from "../../hoc/withNavigationBar";
import EmptySchedules from "./EmptySchedules";
import Schedule from "../../components/schedule";
import { deleteSchedule, getSchedules } from "../../actions";
import { useLocationData } from "../../hooks";
import { getNamedSchedules } from "./utils";

const Schedules = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    location,
    loading: loadingLocation,
    error: errorLocation,
  } = useLocationData();

  const {
    schedules,
    loading: loadingSchedules,
    error: errorSchedules,
  } = useSelector((state) => state.schedules);
  const { activeBuilding } = useSelector((state) => state.buildings);

  useEffect(() => {
    dispatch(getSchedules());
  }, [activeBuilding]);

  const goToCreateSchedule = () => {
    navigate("/schedules/edit");
  };

  const onEdit = (scheduleId) => {
    navigate(`/schedules/edit?schedule=${scheduleId}`);
  };

  const onDelete = async (scheduleId) => {
    await dispatch(deleteSchedule(scheduleId));
  };

  const loading = loadingLocation || loadingSchedules;
  const error = errorLocation || errorSchedules;
  if (loading || error)
    return (
      <Page>
        <Card>
          <CircularProgress
            sx={{
              display: "flex",
              margin: "auto",
              minHeight: 400,
              color: "#f8f8f8",
            }}
          />
        </Card>
      </Page>
    );

  const namedSchedules = getNamedSchedules(schedules, location);

  return (
    <Page>
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
            {namedSchedules.map((schedule) => {
              return (
                <Grid item key={schedule.id} sx={{ marginTop: 2 }}>
                  <Schedule
                    {...schedule}
                    onEdit={() => onEdit(schedule.id)}
                    onDelete={() => onDelete(schedule.id)}
                  />
                </Grid>
              );
            })}
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                onClick={goToCreateSchedule}
              >
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
