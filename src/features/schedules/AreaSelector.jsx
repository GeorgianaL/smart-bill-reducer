import React from "react";
import { Grid } from "@mui/material";
import Select from "../../components/select";
import { useLocationData } from "../../hooks";

const AreaSelector = ({ buildingId, floorsIds, zonesIds, onChange }) => {
  const {
    location: { buildings, floors, zones },
    loading,
    error,
  } = useLocationData();

  const availableFloors = floors.filter(
    (floor) => floor.buildingId === buildingId
  );
  const allFloorsValues = floorsIds.reduce((acc, floorId) => {
    const floor = availableFloors.find(
      (fl) => String(fl.id) === String(floorId)
    );
    return [...acc, floor];
  }, []);

  const availableZones = zones.filter((zone) => {
    const availableFloorIds = availableFloors.map((floor) => floor.id);
    return availableFloorIds.includes(zone.floorId);
  });
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
          onChange={(val) => onChange("buildingId", val)}
          label="Building"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Select
          loading={loading}
          value={allFloorsValues}
          values={availableFloors}
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
          loading={loading}
          value={allZonesValues}
          values={availableZones}
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

AreaSelector.defaultProps = {
  buildingId: null,
  floorsIds: [],
  zonesIds: [],
};

export default AreaSelector;
