import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import Page from "../page";
import Card from "../../components/card";
import Filters from "../../components/filters";
import Tabs from "../../components/tabs";
import withNavigationBar from "../../hoc/withNavigationBar";
import StandardHours from "./StandardHours";
import SpecialHours from "./SpecialHours";

import { getSchedules } from "../../actions";
import { updateSchedule } from "../../slices/schedulesSlice";

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
  const dispatch = useDispatch();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const { schedules, loading, error } = useSelector((state) => state.schedules);

  useEffect(() => {
    dispatch(getSchedules());
  }, []);

  const updateStandardSchedule = (args) => dispatch(updateSchedule(args));

  if (loading || error)
    return <Typography variant="h6">Loading ...</Typography>;
  return (
    <Page title="Schedules">
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            Floor 4
          </Grid>
          <Grid item xs={3}>
            <Filters
              title={`Zones (${filters.length})`}
              data={filters}
              onChange={updateSchedule}
            />
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
                    onChange={updateStandardSchedule}
                  />
                )}
                {activeTabIndex === 1 && (
                  <SpecialHours
                    title={tabs[activeTabIndex].title}
                    subtitle={tabs[activeTabIndex].details}
                    data={schedules.special}
                    onChange={updateStandardSchedule}
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
