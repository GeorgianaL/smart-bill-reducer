import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import Card from "../../components/card";
import HistoryBarChart from "../../components/piechart";
import ListItem from "../../components/list-item";
import { getHealthcheck } from "../../actions";
import { maxHeight } from "@mui/system";

const getChartData = (activeAmount, unresponsiveAmount) => [
  {
    value: activeAmount,
    active: true,
  },
  {
    value: unresponsiveAmount,
    active: false,
  },
];

const SensorHealthcheck = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHealthcheck());
  }, []);

  const { loading, data } = useSelector((state) => state.healthcheck);

  if (loading) {
    return <p>loading...</p>;
  }

  if (!data) {
    return null;
  }

  const chartData = getChartData(data.active, data.unresponsive);

  return (
    <Card>
      <Typography variant="subtitle1">Sensor Healthcheck</Typography>
      <Grid
        container
        direction="row"
        spacing={1}
        justifyContent="space-between"
      >
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <ListItem color="#97E11B" label="Active" />
              <Typography variant="body1">{`${data.active} sensors`}</Typography>
            </Grid>
            <Grid item>
              <ListItem color="#FF8E8E" label="Unresponsive" />
              <Typography variant="body1">{`${data.unresponsive} sensors`}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <HistoryBarChart data={chartData} />
        </Grid>
        {data.details && (
          <Grid item sx={{ maxHeight: 170, overflowY: "auto" }}>
            <Grid container direction="column" spacing={1}>
              {data.details.map((sensor) => (
                <Grid item>
                  <ListItem
                    color="#FF8E8E"
                    label={`Last activity: ${sensor.lastActive}`}
                  />
                  <Typography variant="body1">{`${sensor.floor}, ${sensor.zone}`}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Card>
  );
};

export default SensorHealthcheck;
