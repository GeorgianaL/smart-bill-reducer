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

const StandardHours = ({ title, subtitle, data }) => {
  console.log(data);
  return (
    <Grid container direction="row" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={2}>
            <Grid container direction="row" spacing={2}>
              {standardSchedule.map((weekday) => (
                <Grid
                  item
                  xs={12}
                  sx={{ height: 66, display: "flex", alignItems: "center" }}
                >
                  <Typography variant="body1">{weekday.label}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container direction="column" spacing={2}>
              {standardSchedule.map((weekday) => (
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ height: 66 }}
                  >
                    <Grid item>
                      <RadioButton checked={data[weekday.value].power} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">
                        {data[weekday.value].power ? "Power on" : "Power off"}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid container direction="column" spacing={2}>
              {standardSchedule.map((weekday) => (
                <Grid item>
                  {data[weekday.value].power && (
                    <TimeSlot
                      from={data[weekday.value].from}
                      to={data[weekday.value].to}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StandardHours;
