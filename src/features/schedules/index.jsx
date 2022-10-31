import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Typography } from "@mui/material";
import Page, { FloorSelector } from "../page";
import Card from "../../components/card";
import withNavigationBar from "../../hoc/withNavigationBar";
import EmptySchedules from "./EmptySchedules";
import { getSchedules, getFloors } from "../../actions";

import { schedules } from "../../mock/schedules";

const Schedules = () => {
  const dispatch = useDispatch();

  const { schedules, loading, error } = useSelector((state) => state.schedules);

  // if (loading || error)
  //   return <Typography variant="h6">Loading ...</Typography>;
  return (
    <Page title="Schedules">
      <Card>{schedules.length === 0 && <EmptySchedules />}</Card>
    </Page>
  );
};

export default withNavigationBar(Schedules);
