import React from "react";
import { Grid } from "@mui/material";
import Page from "../../components/page";
import NotificationsCard from "../suggestions/NotificationsCard";
import BarChartCard from "./BarChartCard";
import SchedulesOverviewCard from "./SchedulesOverview/SchedulesCard";
import withNavigationBar from "../../hoc/withNavigationBar";

const Dashboard = () => {
  return (
    <Page title="Dashboard">
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} sm={6}>
          <NotificationsCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BarChartCard />
        </Grid>
        <Grid item xs={12}>
          <SchedulesOverviewCard />
        </Grid>
      </Grid>
    </Page>
  );
};

export default withNavigationBar(Dashboard);
