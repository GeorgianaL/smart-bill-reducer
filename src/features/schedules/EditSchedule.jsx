import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button as ButtonBase,
  Grid,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import Page, { DaySelector } from "../page";
import Card from "../../components/card";
import Button from "../../components/button";
import withNavigationBar from "../../hoc/withNavigationBar";
import Input from "../../components/input";
import AreaSelector from "./AreaSelector";
import TimeSlot from "../../components/timeslot";
import { getSchedules, getSchedulById, saveSchedule } from "../../actions";
import { onChangeSchedule, defaultSchedule } from "../../slices";
// import { useSchedules  } from "../../hooks";

import plusIcon from "../../assets/add-green.svg";
import backIcon from "../../assets/green-arrow-left.svg";
import { useEffect } from "react";

const EditSchedule = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const scheduleId = searchParams.get("schedule");

  const {
    schedules,
    defaultSchedule: defaultScheduleObj,
    loading,
    error,
  } = useSelector((state) => state.schedules);

  useEffect(() => {
    if (scheduleId) {
      dispatch(getSchedulById(scheduleId));
    }
  }, [scheduleId, dispatch]);

  let scheduleData;
  if (!scheduleId) {
    scheduleData = defaultScheduleObj;
  } else {
    scheduleData =
      schedules.length > 0
        ? schedules.find(
            (schedule) => String(schedule.id) === String(scheduleId)
          )
        : defaultScheduleObj;
  }

  if (loading || error)
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );

  const { name, buildingId, floors, zones, details } = scheduleData;

  const onChange = (field, value) => {
    dispatch(onChangeSchedule({ id: scheduleId, field, value }));
  };

  const onChangeScheduleOccurence = (newOccurence, scheduleIndex) => {
    const updatedDetails = details.map((schedule, index) => {
      if (index === scheduleIndex) {
        return {
          ...schedule,
          day: newOccurence,
        };
      }
      return schedule;
    });
    dispatch(
      onChangeSchedule({
        id: scheduleId,
        field: "details",
        value: updatedDetails,
        scheduleIndex,
      })
    );
  };

  const onChangeScheduleIntervals = (
    field,
    value,
    scheduleIndex,
    intervalIndex
  ) => {
    let updatedDetails = details.map((schedule, index) => {
      if (scheduleIndex === index) {
        return {
          ...schedule,
          hours: schedule.hours.map((interval, indx) => {
            if (intervalIndex === indx) {
              return {
                ...interval,
                [field]: value,
              };
            }
            return interval;
          }),
        };
      }
      return schedule;
    });

    dispatch(
      onChangeSchedule({
        id: scheduleId,
        field: "details",
        value: updatedDetails,
        scheduleIndex,
      })
    );
  };

  const addNewInterval = (scheduleIndex) => {
    let updatedDetails = details.map((schedule, index) => {
      if (scheduleIndex === index) {
        return {
          ...schedule,
          hours: [...schedule.hours, defaultSchedule.details[0].hours[0]],
        };
      }
      return schedule;
    });

    dispatch(
      onChangeSchedule({
        id: scheduleId,
        field: "details",
        value: updatedDetails,
      })
    );
  };

  const onRemoveInterval = (scheduleIndex, intervalIndex) => {
    let updatedDetails = details.map((schedule, index) => {
      if (scheduleIndex === index) {
        return {
          ...schedule,
          hours: schedule.hours.filter((timeslot, indx) => {
            if (indx !== intervalIndex) {
              return timeslot;
            }
            return null;
          }),
        };
      }
      return schedule;
    });

    dispatch(
      onChangeSchedule({
        id: scheduleId,
        field: "details",
        value: updatedDetails,
      })
    );
  };

  const addNewSchedule = () => {
    const updatedDetails = [...details, ...defaultSchedule.details];
    dispatch(
      onChangeSchedule({
        id: scheduleId,
        field: "details",
        value: updatedDetails,
      })
    );
  };

  const onSave = async () => {
    await dispatch(
      saveSchedule({
        id: scheduleId,
        ...scheduleData,
      })
    );
    await dispatch(getSchedules());
    navigate("/schedules");
  };

  const goBack = () => navigate("/schedules");

  return (
    <Page>
      <Card>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">{`${
                  scheduleId ? "Edit" : "Create"
                } schedule`}</Typography>
              </Grid>
              <Grid item>
                <Button
                  startIcon={<img src={backIcon} alt="back" />}
                  onClick={goBack}
                >
                  Back
                </Button>
              </Grid>
            </Grid>
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
                  value={name}
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <AreaSelector
                  buildingId={buildingId}
                  floorsIds={floors}
                  zonesIds={zones}
                  onChange={onChange}
                />
              </Grid>
              <Grid item>
                {details.map((schedule, scheduleIndex) => (
                  <Grid
                    container
                    spacing={2}
                    alignItems="flex-start"
                    key={schedule.day}
                  >
                    <Grid item sx={{ marginTop: 1 }}>
                      <DaySelector
                        value={[schedule.day]}
                        variant="outlined"
                        onChange={(newOccurence) =>
                          onChangeScheduleOccurence(newOccurence, scheduleIndex)
                        }
                      />
                    </Grid>
                    <Grid item>
                      <Grid container direction="column" spacing={2}>
                        {schedule.hours.map((interval, intervalIndex) => (
                          <Grid item key={intervalIndex}>
                            <TimeSlot
                              from={interval.startHour}
                              to={interval.endHour}
                              onChange={(field, value) =>
                                onChangeScheduleIntervals(
                                  field,
                                  value,
                                  scheduleIndex,
                                  intervalIndex
                                )
                              }
                              onRemove={() =>
                                onRemoveInterval(scheduleIndex, intervalIndex)
                              }
                            />
                          </Grid>
                        ))}
                        <Grid item>
                          <Button
                            variant="text"
                            startIcon={<img src={plusIcon} alt="plus" />}
                            onClick={() => addNewInterval(scheduleIndex)}
                          >
                            Add hours
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
                <Grid item>
                  <Button
                    variant="text"
                    startIcon={<img src={plusIcon} alt="plus" />}
                    onClick={addNewSchedule}
                  >
                    Add days
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ButtonBase variant="contained" onClick={onSave}>
              Save schedule
            </ButtonBase>
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};

export default withNavigationBar(EditSchedule);
