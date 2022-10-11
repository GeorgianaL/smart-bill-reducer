import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import withNavigationBar from "../../hoc/withNavigationBar";
import Page from "../page";
import Card from "../../components/card";
import MapTool from "../../components/map";
import EntitiesList from "./EntitiesList";
import { getEntities } from "../../actions";
import { addEntity } from "../../slices/entitiesSlice";

const Map = () => {
  const dispatch = useDispatch();

  const { zones, sensors, relays, loading } = useSelector(
    (state) => state.entities
  );

  const entities = { zones, sensors, relays };

  useEffect(() => {
    dispatch(getEntities());
  }, []);

  const addNewEntity = (payload) => dispatch(addEntity(payload));

  if (loading) return <Typography variant="h6">Loading ...</Typography>;
  return (
    <Page title="Maps">
      <Grid container direction="row" spacing={2}>
        <Grid item sm={12} md={9}>
          <Card>
            <Typography variant="h6">Floor 4</Typography>
            <MapTool {...entities} addEntity={addNewEntity} />
          </Card>
        </Grid>
        <Grid item sm={12} md={3}>
          <Card>
            <EntitiesList {...entities} />
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
};

export default withNavigationBar(Map);
