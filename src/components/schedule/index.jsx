import React, { useState } from "react";
import {
  Grid,
  Typography,
  List as ListBase,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import calendarIcon from "../../assets/calendar.svg";
import smallCalendarIcon from "../../assets/small-calendar.svg";
import smallClockIcon from "../../assets/small-clock.svg";
import menuIcon from "../../assets/more.svg";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete-bin.svg";

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

const Schedule = ({ name, floors, zones, details, onEdit, onDelete }) => {
  const [open, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
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

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

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
          onClick={openMenu}
          className="actions"
        >
          <img src={menuIcon} alt="menu" />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={closeMenu}
        >
          <MenuItem onClick={onEdit}>
            <ListItemIcon>
              <img src={editIcon} alt="edit" />
            </ListItemIcon>
            Edit
          </MenuItem>
          <MenuItem onClick={onDelete}>
            <ListItemIcon>
              <img src={deleteIcon} alt="delete" />
            </ListItemIcon>
            Delete
          </MenuItem>
        </Menu>
      </Grid>
    </Container>
  );
};

export default Schedule;
