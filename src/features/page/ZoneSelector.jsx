import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, FormControl } from "@mui/material";
// import { getAllZones } from "../../actions";
import { changeActiveFloor } from "../../slices/buildingsSlice";
import Select from "../../components/select";

const ZoneSelector = ({ variant, multiple }) => {
  const dispatch = useDispatch();

  const { activeFloor, loading: floorsLoading } = useSelector(
    (state) => state.buildings
  );
  const { zones, loading: entitiesLoading } = useSelector(
    (state) => state.entities
  );

  const loading = floorsLoading || entitiesLoading;

  useEffect(() => {
    if (zones.length === 0 && !loading) {
      // dispatch(getAllZones());
    }
  }, []);

  if (loading) {
    return <Typography variant="h6">Loading ...</Typography>;
  }

  const onChange = (newActiveFloor) =>
    dispatch(changeActiveFloor(newActiveFloor));

  return (
    <FormControl variant="standard">
      <Select
        id="select-zone"
        value={activeFloor}
        onChange={onChange}
        label="Select zones"
        values={zones}
        variant={variant}
        multiple={multiple}
      />
    </FormControl>
  );
};

ZoneSelector.defaultProps = {
  variant: "filled",
};

export default ZoneSelector;
