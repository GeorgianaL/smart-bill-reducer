import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "../../components/select";
import { getBuildings } from "../../actions";
import { changeActiveBuilding } from "../../slices/buildingsSlice";

const BuildingSelector = () => {
  const dispatch = useDispatch();

  const { activeBuilding, buildings, loading } = useSelector(
    (state) => state.buildings
  );

  const navigate = useNavigate();

  useEffect(() => {
    // if (buildings.length === 0) {
    dispatch(getBuildings()).then((response) => {
      // if (response.payload.length === 0) {
      navigate("/onboarding");
      // }
    });
    // }
  }, []);

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
