import React from "react";
import { Grid, Typography } from "@mui/material";
import Card from "../../components/card";
import HistoryBarChart from "../../components/barchart";

import barChartData from "../../mock/history";

const BarChartCard = () => (
  <Card
    title={
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="body1">Energy Activity</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Last week</Typography>
        </Grid>
      </Grid>
    }
    childrenProps={{ height: 200, minWidth: 420 }}
  >
    <HistoryBarChart data={barChartData} />
  </Card>
);

export default BarChartCard;
