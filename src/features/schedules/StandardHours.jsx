import React from "react";
import { Grid, Typography } from "@mui/material";
import RadioButton from "../../components/radio";
import TimeSlot from "../../components/timeslot";

const standardSchedule = [
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
  { label: "Saturday", value: "saturday" },
  { label: "Sunday", value: "sunday" },
];

const StandardHours = ({ title, subtitle, data, onChange }) => {
  const updateStandardSchedule = (weekday, value) => {
    onChange({
      scheduleType: "standard",
      scheduleDay: weekday,
      field: "power",
      value,
    });
  };

  const updateStandardTimeSlot = (weekday, field, value) => {
    onChange({
      scheduleType: "standard",
      scheduleDay: weekday,
      field,
      value,
    });
  };

  return (
    <Grid container direction="row" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </Grid>
      <Grid item xs={12}>
        {standardSchedule.map((weekday) => (
          <Grid
            container
            direction="row"
            alignItems="center"
            sx={{ height: 58 }}
            key={weekday.label}
          >
            <Grid item xs={2}>
              <Typography variant="body1">{weekday.label}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item>
                  <RadioButton
                    checked={data[weekday.value].power}
                    onChange={(e) =>
                      updateStandardSchedule(weekday.value, e.target.checked)
                    }
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">
                    {data[weekday.value].power ? "Power on" : "Power off"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              {data[weekday.value].power && (
                <TimeSlot
                  from={data[weekday.value].from}
                  to={data[weekday.value].to}
                  onChange={(field, value) =>
                    updateStandardTimeSlot(weekday.value, field, value)
                  }
                />
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default StandardHours;
