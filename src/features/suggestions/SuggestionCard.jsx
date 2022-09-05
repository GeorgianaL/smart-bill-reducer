import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import Card from "../../components/card";

import bellIcon from "../../assets/bell.svg";

const SuggestionCard = (props) => (
  <Card>
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid container direction="row" spacing={1} alignItems="center">
          <Grid item>
            <img src={bellIcon} alt="bell" />
          </Grid>
          <Grid item>
            <Typography variant="body1">New schedule suggestion</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">{props.area}</Typography>

        <Typography variant="subtitle1">{props.time}</Typography>

        <Typography variant="subtitle1">{props.occurence}</Typography>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="secondary" size="small">
          Change
        </Button>
      </Grid>
    </Grid>
  </Card>
);

export default SuggestionCard;
