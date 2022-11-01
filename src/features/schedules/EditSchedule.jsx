import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button as ButtonBase, Grid, Typography } from "@mui/material";
import Page, { DaySelector } from "../page";
import Card from "../../components/card";
import withNavigationBar from "../../hoc/withNavigationBar";
import Input from "../../components/input";
import AreaSelector from "./AreaSelector";
import TimeSlot from "../../components/timeslot";
import { onChangeSchedule, onChangeScheduleDetails } from "../../slices";

const EditSchedule = () => {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();

  const scheduleId = searchParams.get("schedule");

  const scheduleData = useSelector((state) =>
    state.schedules.schedules.find((schedule) => schedule.id === scheduleId)
  );

  const { name, building, floors, zones, details } = scheduleData;

  const onChange = (field, value) => {
    dispatch(onChangeSchedule({ id: scheduleId, field, value }));
  };

  const onChangeScheduleOccurence = (newOccurence, scheduleIndex) => {
    dispatch(
      onChangeScheduleDetails({
        id: scheduleId,
        field: "day",
        value: newOccurence,
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
    const updatedHours = details[scheduleIndex].hours.map((interval, indx) => {
      if (intervalIndex === indx) {
        return {
          ...interval,
          [field]: value,
        };
      }
      return interval;
    });

    dispatch(
      onChangeScheduleDetails({
        id: scheduleId,
        field: "hours",
        value: updatedHours,
        scheduleIndex,
      })
    );
  };

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
                  value={name}
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <AreaSelector
                  buildingId={building}
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
                    alignItems="flex-end"
                    key={schedule.day}
                  >
                    <Grid item>
                      <DaySelector
                        value={[schedule.day]}
                        variant="outlined"
                        onChange={(newOccurence) =>
                          onChangeScheduleOccurence(newOccurence, scheduleIndex)
                        }
                      />
                    </Grid>
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
                        />
                      </Grid>
                    ))}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};

export default withNavigationBar(EditSchedule);
