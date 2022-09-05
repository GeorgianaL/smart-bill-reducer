import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import sensorIcon from "../../assets/sensor-green.svg";

const Container = styled(Grid)(({ theme }) => ({
  borderLeft: `2px dashed ${theme.palette.primary.main}`,
  "&.MuiGrid-item": {
    paddingLeft: 16,
    paddingTop: 0,
    marginTop: 32,
  },
}));

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
    <Grid container direction="column" spacing={4}>
      {allZones.map((zone) => (
        <Container item key={zone.id}>
          <Typography variant="h6">{zone.name}</Typography>
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
                  <Grid container direction="row" spacing={2}>
                    <Grid item>
                      <img src={sensorIcon} alt="sensor" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">{`Last activity: ${sensor.lastActive}`}</Typography>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            ))}
        </Container>
      ))}
    </Grid>
  );
};

EntitiesList.defaultProps = {
  zones: [],
  sensors: [],
};

export default EntitiesList;
