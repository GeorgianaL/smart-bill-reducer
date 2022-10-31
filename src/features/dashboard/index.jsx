import React from "react";
import { Grid } from "@mui/material";
import Page from "../page";
import NotificationsCard from "../suggestions/NotificationsCard";
import SensorHealthcheck from "./SensorHealthcheck";
import BarChartCard from "./BarChartCard";
import SchedulesOverviewCard from "./SchedulesOverview/SchedulesCard";
import withNavigationBar from "../../hoc/withNavigationBar";

const Dashboard = () => {
  return (
    <Page title="Dashboard">
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <NotificationsCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <SensorHealthcheck />
        </Grid>
        {/* <Grid item xs={12} sm={12} md={6}>
          <BarChartCard />
        </Grid> */}
        <Grid item xs={12}>
          <SchedulesOverviewCard />
        </Grid>
      </Grid>
    </Page>
  );
};

export default withNavigationBar(Dashboard);
