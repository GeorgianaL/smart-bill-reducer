import React from "react";
import { Grid, Typography, Checkbox, Button } from "@mui/material";
import Card from "../../components/card";

import { annualSuggestions } from "../../mock/notifications";

const AnnualSuggestionsCard = () => {
  return (
    <Card
      title={<Typography variant="body1">Annual Data Suggestions</Typography>}
    >
      <Typography variant="subtitle1">01 Jan 2019 - 31 Dec 2019</Typography>
      <Grid
        container
        direction="column"
        spacing={2}
        sx={{ marginTop: 2, marginBottom: 2 }}
      >
        {annualSuggestions.map((suggestion) => (
          <Grid item>
            <Grid container direction="row" spacing={2} alignItems="center">
              <Grid item>
                <Checkbox color="secondary" />
              </Grid>
              <Grid item>{suggestion.text}</Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Button variant="outlined" color="secondary" size="small">
        Change schedules
      </Button>
    </Card>
  );
};

export default AnnualSuggestionsCard;
