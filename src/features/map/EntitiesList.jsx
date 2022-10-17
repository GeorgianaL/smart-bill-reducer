import React from "react";
import { Grid, Typography } from "@mui/material";
import Card from "../../components/card";
import clockIcon from "../../assets/clock.svg";

const EntitiesList = ({ zones, sensors }) => {
  let allZones = [...zones];

  sensors.forEach((sensor) => {
    const zoneIndex = zones.findIndex((zone) => zone.id === sensor.zoneId);
    allZones[zoneIndex] = {
      ...allZones[zoneIndex],
      sensors: allZones[zoneIndex].sensors
        ? [...allZones[zoneIndex].sensors, sensor]
        : [sensor],
    };
  });

  return (
    <Grid container direction="column" spacing={2}>
      {allZones.map((zone) => (
        <Grid item key={zone.id}>
          <Card>
            <Typography variant="h6" color="primary">
              {zone.name}
            </Typography>
            {zone.sensors &&
              zone.sensors.map((sensor) => (
                <Grid
                  container
                  key={sensor.id}
                  direction="column"
                  sx={{ marginTop: 2 }}
                >
                  <Grid item>
                    <Typography variant="body1">{sensor.name}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">{`ID: ${sensor.id}`}</Typography>
                  </Grid>
                  {sensor.lastActive && (
                    <Grid
                      item
                      sx={{ display: "flex", alignItems: "flex-start" }}
                    >
                      <img src={clockIcon} alt="sensor" />
                      <Typography
                        variant="body2"
                        sx={{ marginLeft: 1 }}
                      >{`Last activity: ${sensor.lastActive}`}</Typography>
                    </Grid>
                  )}
                </Grid>
              ))}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

EntitiesList.defaultProps = {
  zones: [],
  sensors: [],
};

export default EntitiesList;
