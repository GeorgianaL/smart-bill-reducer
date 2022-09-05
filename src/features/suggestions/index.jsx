import React from "react";
import { Grid, Typography } from "@mui/material";
import Page from "../../components/page";
import SuggestionCard from "./SuggestionCard";
import NotificationsCard from "./NotificationsCard";
import withNavigationBar from "../../hoc/withNavigationBar";

import notifications from "../../mock/notifications";

import { suggestions } from "../../mock/notifications";

const Suggestions = () => (
  <Page title="Suggestions">
    <Grid container direction="row" spacing={2}>
      {suggestions.map((suggestion) => (
        <Grid item xs={3}>
          <SuggestionCard {...suggestion} />
        </Grid>
      ))}
      <Grid item xs={12} sm={6}>
        <NotificationsCard notifications={notifications} />
      </Grid>
    </Grid>
  </Page>
);

export default withNavigationBar(Suggestions);
