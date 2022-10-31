import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import Card from "../../components/card";
import HistoryBarChart from "../../components/piechart";
import ListItem from "../../components/list-item";
import { getHealthcheck } from "../../actions";

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

  const { activeBuilding } = useSelector((state) => state.buildings);

  useEffect(() => {
    dispatch(getHealthcheck());
  }, [activeBuilding]);

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
      <Typography variant="subtitle1">Device Healthcheck</Typography>
      <Grid
        container
        direction="row"
        spacing={data.details ? 1 : 4}
        justifyContent={data.details ? "space-between" : "center"}
      >
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <ListItem color="#97E11B" label="Active" />
              <Typography variant="body1">{`${data.active} devices`}</Typography>
            </Grid>
            <Grid item>
              <ListItem color="#FF8E8E" label="Unresponsive" />
              <Typography variant="body1">{`${data.unresponsive} devices`}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <HistoryBarChart data={chartData} />
        </Grid>
        {data.details && (
          <Grid item sx={{ maxHeight: 170, overflowY: "auto" }}>
            <Grid container direction="column" spacing={1}>
              {data.details.map((device, index) => (
                <Grid item key={`${device.floor}-${index}`}>
                  <Typography variant="body1">
                    {device.sensorName || device.relayName}
                  </Typography>
                  <ListItem
                    color="#FF8E8E"
                    label={`Last activity: ${device.lastTimeAlive}`}
                  />
                  <Typography variant="body2">
                    {device.zone
                      ? `${device.floor}, ${device.zone}`
                      : device.floor}
                  </Typography>
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
