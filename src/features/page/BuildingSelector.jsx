import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { getBuildings } from "../../actions";
import { changeActiveBuilding } from "../../slices/buildingsSlice";

const BuildingSelector = () => {
  const dispatch = useDispatch();

  const { activeBuilding, buildings, loading } = useSelector(
    (state) => state.buildings
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (buildings.length === 0) {
      dispatch(getBuildings()).then((response) => {
        if (response.payload.length === 0) {
          navigate("/onboarding");
        }
      });
    }
  }, []);

  const onChange = (e) => dispatch(changeActiveBuilding(e.target.value));

  return (
    <>
      {!loading && (
        <FormControl variant="standard" fullWidth>
          <Select
            labelId="simple-select-standard-label"
            id="simple-select-standard"
            value={activeBuilding}
            onChange={onChange}
            label="Age"
            multiple
          >
            {buildings.map((option) => (
              <MenuItem key={option.id} value={option}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default BuildingSelector;
