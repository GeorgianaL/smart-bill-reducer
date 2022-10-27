import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import Page, { FloorSelector } from "../page";
import Card from "../../components/card";
import Filters from "../../components/filters";
import Tabs from "../../components/tabs";
import withNavigationBar from "../../hoc/withNavigationBar";
import StandardHours from "./StandardHours";
import SpecialHours from "./SpecialHours";

import {
  getFloors,
  getEntities,
  getSchedules,
  saveStandardSchedule,
} from "../../actions";
import { updateFilters, updateSchedule } from "../../slices/schedulesSlice";

import { schedules } from "../../mock/schedules";

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

  const { filters, loading, error } = useSelector((state) => state.schedules);
  const { zones } = useSelector((state) => state.entities);

  // useEffect(() => {
  //   dispatch(getFloors())
  //     .then(() => dispatch(getEntities()))
  //     .then(() => dispatch(getSchedules()));
  // }, []);

  const updateStandardSchedule = (args) =>
    dispatch(saveStandardSchedule(args)).then(() =>
      dispatch(updateSchedule(args))
    );

  const onChangeFilters = (args) =>
    dispatch(updateFilters(args)).then(() => dispatch(getSchedules()));

  // if (loading || error)
  //   return <Typography variant="h6">Loading ...</Typography>;
  return (
    <Page title="Schedules">
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FloorSelector variant="standard" />
          </Grid>
          <Grid item xs={3}>
            <Filters
              title={`Zones (${filters.length})`}
              allOptions={zones}
              selected={filters}
              onChange={onChangeFilters}
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
