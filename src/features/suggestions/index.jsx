import React from "react";
import { Grid } from "@mui/material";
import Page from "../page";
import SuggestionCard from "./SuggestionCard";
import NotificationsCard from "./NotificationsCard";
import HeatControllerCard from "./HeatControllerCard";
import AnnualSuggestionsCard from "./AnnualSuggestionsCard";
import withNavigationBar from "../../hoc/withNavigationBar";

import notifications, { suggestions } from "../../mock/notifications";

const Suggestions = () => (
  <Page title="Suggestions">
    <Grid container direction="row" spacing={2}>
      {suggestions.map((suggestion) => (
        <Grid item xs={3}>
          <SuggestionCard {...suggestion} />
        </Grid>
      ))}
      <Grid item xs={12} sm={6}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <NotificationsCard notifications={notifications} />
          </Grid>
          {/* <Grid item>
            <HeatControllerCard />
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <AnnualSuggestionsCard />
      </Grid>
    </Grid>
  </Page>
);

export default withNavigationBar(Suggestions);
