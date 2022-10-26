import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Backdrop, CircularProgress } from "@mui/material";
import withNavigationBar from "../../hoc/withNavigationBar";
import Page, { FloorSelector } from "../page";
import Card from "../../components/card";
import MapTool from "../../components/map";
import EntitiesList from "./EntitiesList";
import SwithPowerDialog from "./SwithPowerDialog";
import {
  getEntities,
  getFloors,
  addPicture,
  saveFloor,
  addZone,
  addSensor,
  addRelay,
} from "../../actions";
import { setActiveEntity, addEntity } from "../../slices/entitiesSlice";

const Map = () => {
  const dispatch = useDispatch();

  const {
    activeFloor,
    floors,
    loadingPowerChange,
    loading: loadingFloorData,
  } = useSelector((state) => state.buildings);

  const floorData = floors.find(
    (floor) => String(floor.id) === String(activeFloor)
  );

  useEffect(() => {
    if (activeFloor) {
      dispatch(getEntities(activeFloor));
    } else {
      dispatch(getFloors()).then(() => dispatch(getEntities(activeFloor)));
    }
  }, [activeFloor]);

  const { zones, sensors, relays, activeEntity, loading } = useSelector(
    (state) => state.entities
  );

  const entities = { zones, sensors, relays };

  const addNewEntity = (payload) => dispatch(addEntity(payload));

  const addNewZone = async (payload) => {
    await dispatch(addZone(payload));
    dispatch(getEntities(activeFloor));
  };

  const addNewSensor = (payload) => dispatch(addSensor(payload));

  const addNewRelay = (payload) => dispatch(addRelay(payload));

  const highlightEntity = (entityId) => dispatch(setActiveEntity(entityId));

  const onChangeImage = async (file) => {
    const map = await dispatch(addPicture(file));

    if (map && map.payload && map.payload.url) {
      await dispatch(
        saveFloor({
          id: activeFloor,
          mapUrl: map.payload.url,
        })
      );
      dispatch(getFloors());
    }
  };

  if (loading || loadingFloorData)
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );

  const getLinkedZoneNames = () => {
    const relay = relays.find((relay) => relay.id === activeEntity);
    const linkedZoneNames = relay.zoneIds.map((zoneId) => {
      const zoneData = zones.find((zone) => zone.id === zoneId);
      return zoneData.name;
    });

    return linkedZoneNames;
  };

  return (
    <Page title="Maps">
      <Grid container direction="row" spacing={2}>
        {activeEntity && (
          <SwithPowerDialog
            open={activeEntity !== null}
            handleClose={() => highlightEntity(null)}
            loading={loadingPowerChange}
            relayData={relays.find((relay) => relay.id === activeEntity)}
            zones={getLinkedZoneNames()}
          />
        )}
        <Grid item sm={12} lg={9}>
          <Card>
            <FloorSelector />
            <MapTool
              {...entities}
              img={floorData ? floorData.mapUrl : null}
              addEntity={addNewEntity}
              addNewZone={addNewZone}
              addNewSensor={addNewSensor}
              addNewRelay={addNewRelay}
              onChangeImage={onChangeImage}
              highlightEntity={highlightEntity}
            />
          </Card>
        </Grid>
        <Grid item sm={12} lg={3}>
          <EntitiesList {...entities} />
        </Grid>
      </Grid>
    </Page>
  );
};

export default withNavigationBar(Map);
