import React from "react";
import { Grid, Typography } from "@mui/material";
import Card from "../../components/card";
import RadioButton from "../../components/radio";

import notificationIcon from "../../assets/notification.svg";

import notifications from "../../mock/notifications";

const NotificationsCard = () => {
  return (
    <Card>
      <Grid container direction="row" alignItems="center" spacing={2}>
        <Grid item>
          <img src={notificationIcon} alt="notifications" />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">{`You have ${notifications.length} new suggestions!`}</Typography>
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={2}>
        {notifications.map((notif) => (
          <Grid item key={notif.id}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={10}>
                <Typography variant="body1">{notif.text}</Typography>
                <Typography variant="body2">{notif.details}</Typography>
              </Grid>
              <Grid item xs={2}>
                <RadioButton />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default NotificationsCard;
