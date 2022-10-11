import React from "react";
import { Grid, Typography, Slider } from "@mui/material";
import Card from "../../components/card";

import thermometerIcon from "../../assets/thermometer.svg";

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 14,
    label: "14°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
];

const valuetext = (value) => {
  return `${value}°C`;
};

const valueLabelFormat = (value) => {
  return marks.findIndex((mark) => mark.value === value) + 1;
};

const HeatControllerCard = () => {
  return (
    <Card>
      <Grid container direction="row" spacing={2}>
        <Grid item>
          <img src={thermometerIcon} alt="fire" />
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="body1">
                Lower the heat to 18°C to save 10kWH which costs 9$
              </Typography>
            </Grid>
            <Grid item>
              <Slider
                aria-label="Always visible"
                defaultValue={20}
                getAriaValueText={valuetext}
                valueLabelFormat={valueLabelFormat}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
                max={marks[marks.length - 1].value}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HeatControllerCard;
