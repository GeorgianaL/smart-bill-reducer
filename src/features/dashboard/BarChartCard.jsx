import React, { useState, useEffect, useRef } from "react";
import { Grid, Typography } from "@mui/material";
import Card from "../../components/card";
import HistoryBarChart from "../../components/barchart";

import barChartData from "../../mock/history";

const BarChartCard = () => {
  const [width, setWidth] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    // The 'current' property contains info of the reference:
    // align, title, ... , width, height, etc.
    if (cardRef.current) {
      setWidth(cardRef.current.offsetWidth);
    }
  }, [cardRef]);
  // console.log(width);
  return (
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
      childrenProps={{ height: 200, minWidht: width }}
    >
      <div ref={cardRef}>
        <HistoryBarChart data={barChartData} />
      </div>
    </Card>
  );
};

export default BarChartCard;
