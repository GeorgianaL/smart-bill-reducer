import React from "react";
import { Grid, Typography, List as ListBase, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

import calendarIcon from "../../assets/calendar.svg";
import smallCalendarIcon from "../../assets/small-calendar.svg";
import smallClockIcon from "../../assets/small-clock.svg";
import menuIcon from "../../assets/more.svg";

const Container = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[500]}`,
  padding: 20,
  borderRadius: 4,
}));

const List = styled(ListBase)(({ theme }) => ({
  maxWidth: 300,
  display: "flex",
  padding: 0,
  img: {
    marginRight: 8,
  },
}));

const Schedule = ({ name, floors, zones, details }) => {
  const days = details.map((detail) => detail.day);

  let intervals = [];
  details.forEach((detail) => {
    return detail.hours.forEach((time) => {
      const interval = `${time.startHour}-${time.endHour}`;
      if (!intervals.includes(interval)) {
        intervals = [...intervals, interval];
      }
    });
  });

  return (
    <Container
      container
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item lg={2}>
        <img src={calendarIcon} alt="calendar" />
      </Grid>
      <Grid item xs={12} lg={3}>
        <Grid container direction="column">
          <Grid item>
            <Typography>{name}</Typography>
          </Grid>
          <Grid item>
            <List>
              <Typography variant="subtitle1">{floors.join(", ")}</Typography>
            </List>
            <List>
              <Typography variant="subtitle1">{zones.join(", ")}</Typography>
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={3}>
        <List>
          <img src={smallCalendarIcon} alt="calendar" />
          <Typography variant="body1">{days.join(", ")}</Typography>
        </List>
      </Grid>
      <Grid item xs={12} lg={3}>
        <List>
          <img src={smallClockIcon} alt="time" />
          <Typography variant="body1">{intervals.join(", ")}</Typography>
        </List>
      </Grid>
      <Grid item xs={12} lg={1}>
        <IconButton
          aria-label="schedule-actions"
          //   onClick={onRemove}
          className="actions"
        >
          <img src={menuIcon} alt="menu" />
        </IconButton>
      </Grid>
    </Container>
  );
};

export default Schedule;
