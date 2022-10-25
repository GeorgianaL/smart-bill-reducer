import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, FormControl } from "@mui/material";
import { getFloors } from "../../actions";
import { changeActiveFloor } from "../../slices/buildingsSlice";
import Select from "../../components/select";

const FloorSelector = ({ variant }) => {
  const dispatch = useDispatch();

  const { loading, floors, activeBuilding, activeFloor } = useSelector(
    (state) => state.buildings
  );

  useEffect(() => {
    if (floors.length === 0 && !loading) {
      dispatch(getFloors());
    }
  }, []);

  if (loading) {
    return <Typography variant="h6">Loading ...</Typography>;
  }

  let floorOptions = [];

  activeBuilding.forEach((building) => {
    return building.floorIds.forEach((floorId) => {
      const floor = floors.find(
        (floor) => String(floor.id) === String(floorId)
      );
      if (floor) {
        floorOptions = [
          ...floorOptions,
          {
            id: floorId,
            name: floor.name,
          },
        ];
      }
    });
  });

  const onChange = (newActiveFloor) =>
    dispatch(changeActiveFloor(newActiveFloor));

  return (
    <FormControl variant="standard">
      <Select
        id="select-floor"
        value={activeFloor}
        onChange={onChange}
        label="Floor"
        values={floorOptions}
        variant={variant}
      />
    </FormControl>
  );
};

FloorSelector.defaultProps = {
  variant: "filled",
};

export default FloorSelector;
