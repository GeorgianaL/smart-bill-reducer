import React from "react";
import moment from "moment";
import { Grid, Typography, IconButton } from "@mui/material";
import RadioButton from "../../components/radio";
import Input from "../../components/input";
import TimeSlot from "../../components/timeslot";
import deleteIcon from "../../assets/delete-bin.svg";

const SpecialHours = ({ title, subtitle, data, onChange }) => {
  const onChangeSchedule = (scheduleId, field, value) =>
    onChange(
      data.map((schedule) => {
        if (schedule.id === scheduleId) {
          return {
            ...schedule,
            [field]: value,
          };
        }
        return schedule;
      })
    );

  const onRemoveSchedule = (scheduleId) =>
    onChange(data.filter((schedule) => schedule.id !== scheduleId));

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          {data.map((schedule) => {
            const date = moment(schedule.date).format("yyyy-MM-DD");
            return (
              <Grid item key={schedule.id}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <Input
                      type="date"
                      value={date}
                      onChange={(e) =>
                        onChangeSchedule(schedule.id, "date", e.target.value)
                      }
                      style={{
                        width: 150,
                      }}
                    ></Input>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <RadioButton
                          checked={schedule.power}
                          onChange={(e) =>
                            onChangeSchedule(
                              schedule.id,
                              "power",
                              e.target.checked
                            )
                          }
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          {schedule.power ? "Power on" : "Power off"}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    {schedule.power && (
                      <TimeSlot
                        from={schedule.from}
                        to={schedule.to}
                        onChange={(field, value) =>
                          onChangeSchedule(schedule.id, field, value)
                        }
                      />
                    )}
                  </Grid>
                  <Grid item>
                    <IconButton
                      aria-label="delete-floor"
                      onClick={() => onRemoveSchedule(schedule.id)}
                      className="delete"
                      style={{ visibility: "visible" }}
                    >
                      <img src={deleteIcon} alt="delete" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SpecialHours;
