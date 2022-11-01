import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../../components/select";
import { getFloors, getZonesByBuildingId } from "../../actions";

const AreaSelector = ({ buildingId, floorsIds, zonesIds, onChange }) => {
  const dispatch = useDispatch();
  const {
    buildings,
    floors,
    loading: loadingFloors,
  } = useSelector((state) => state.buildings);
  const { zones, loading: loadingZones } = useSelector(
    (state) => state.entities
  );
  const loading = loadingFloors || loadingZones;

  useEffect(() => {
    if (floors.length === 0) {
      dispatch(getFloors());
    }
    if (zones.length === 0) {
      dispatch(getZonesByBuildingId(buildingId));
    }
  }, []);

  if (loading || floors.length === 0 || zones.length === 0) {
    return null;
  }

  const allFloorsValues = floorsIds.reduce((acc, floorId) => {
    const floor = floors.find((fl) => String(fl.id) === String(floorId));
    return [...acc, floor];
  }, []);

  const allZonesValues = zonesIds.reduce((acc, zoneId) => {
    const zone = zones.find((fl) => String(fl.id) === String(zoneId));
    return [...acc, zone];
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Select
          value={buildingId}
          values={buildings}
          onChange={(val) => onChange("building", val)}
          label="Building"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Select
          loading={loadingFloors}
          value={allFloorsValues}
          values={floors}
          onChange={(newFloors) => {
            const ids = newFloors.map((floor) => floor.id);
            onChange("floors", ids);
          }}
          label="Floors"
          variant="outlined"
          multiple
        />
      </Grid>
      <Grid item>
        <Select
          loading={loadingZones}
          value={allZonesValues}
          values={zones}
          onChange={(newZones) => {
            const ids = newZones.map((zone) => zone.id);
            onChange("zones", ids);
          }}
          label="Zones"
          variant="outlined"
          multiple
        />
      </Grid>
    </Grid>
  );
};

export default AreaSelector;
