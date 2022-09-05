import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Page from "../../components/page";
import Card from "../../components/card";
import Filters from "../../components/filters";
import Tabs from "../../components/tabs";
import withNavigationBar from "../../hoc/withNavigationBar";
import StandardHours from "./StandardHours";
import SpecialHours from "./SpecialHours";

import { schedules } from "../../mock/schedules";

const filters = [
  "Zone 1",
  "Zone 2",
  "Zone 3",
  "Zone 4",
  "Zone 5",
  "Meeting room 1",
  "Meeting room 2",
  "Meeting room 3",
  "Meeting room 4",
];

const tabs = [
  {
    title: "Set standard hours",
    details: "Set the standard hours for the working days (Monday to Fridays).",
  },
  {
    title: "Set special hours",
    details: "Set exceptions for special days (Public Holiday, etc.)",
  },
];

const Schedules = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <Page title="Schedules">
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            Floor 4
          </Grid>
          <Grid item xs={3}>
            <Filters title={`Zones (${filters.length})`} data={filters} />
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Tabs
                  tabsList={tabs.map((tab) => tab.title)}
                  activeIndex={activeTabIndex}
                  handleChange={(newState) => setActiveTabIndex(newState)}
                />
              </Grid>
              <Grid item xs={12}>
                {activeTabIndex === 0 && (
                  <StandardHours
                    title={tabs[activeTabIndex].title}
                    subtitle={tabs[activeTabIndex].details}
                    data={schedules.standard}
                  />
                )}
                {activeTabIndex === 1 && (
                  <SpecialHours
                    title={tabs[activeTabIndex].title}
                    subtitle={tabs[activeTabIndex].details}
                    data={schedules.special}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
};

export default withNavigationBar(Schedules);
