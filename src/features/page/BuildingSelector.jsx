import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../../components/select";
import { changeActiveBuilding } from "../../slices/buildingsSlice";
import { useBuildings } from "../../hooks";

const BuildingSelector = () => {
  const { buildings, loading } = useBuildings();
  const dispatch = useDispatch();

  const { activeBuilding } = useSelector((state) => state.buildings);

  const onChange = (e) => dispatch(changeActiveBuilding(e));

  return (
    <>
      {!loading && (
        <Select
          value={activeBuilding}
          values={buildings}
          onChange={onChange}
          label="Building"
          multiple
          variant="standard"
        />
      )}
    </>
  );
};

export default BuildingSelector;
