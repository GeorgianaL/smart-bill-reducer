import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Backdrop, CircularProgress } from "@mui/material";
import {
  getBuildings,
  saveBuilding,
  deleteBuilding,
  getFloors,
  deleteFloor,
  saveFloorName,
} from "../../actions";
import {
  editFloorName,
  addNewFloor,
  editBuildingName,
  addNewBuilding,
  discardEmptyFloor,
  discardEmptyBuilding,
} from "../../slices/buildingsSlice";
import withNavigationBar from "../../hoc/withNavigationBar";
import Card from "../../components/card";
import Input from "../../components/input";
import Button, { AddEntityButton } from "../../components/button";
import addIcon from "../../assets/add.svg";

const Buildings = () => {
  const [cardHighlighted, setCardHighlighted] = useState(0);
  const [buildingEditingMode, setBuildingEditingMode] = useState(-1);
  const dispatch = useDispatch();

  const { buildings, floors, loading } = useSelector(
    (state) => state.buildings
  );

  useEffect(() => {
    dispatch(getBuildings());
    dispatch(getFloors());
  }, []);

  const onRemoveFloor = (floorId) =>
    dispatch(deleteFloor(floorId)).then(dispatch(getFloors()));

  const onAddNewFloor = (buildingId) => dispatch(addNewFloor(buildingId));

  const onRemoveBuilding = (buildingId) =>
    dispatch(deleteBuilding(buildingId))
      .then(dispatch(getBuildings()))
      .then(dispatch(getFloors()));

  const onEditBuildingName = (buildingId) => setBuildingEditingMode(buildingId);

  const addBuilding = () => {
    setBuildingEditingMode(null);
    dispatch(addNewBuilding());
  };

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Card>
          <Typography variant="h3">Your buildings</Typography>
        </Card>
      </Grid>
      {loading && (
        <Backdrop open>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {!loading &&
        buildings.map((building, index) => {
          return (
            <Grid item key={String(building.id)}>
              <Card
                title={
                  <>
                    {buildingEditingMode === building.id ? (
                      <Input
                        id={String(building.id)}
                        value={building.name}
                        autoFocus={building.id === null}
                        onChange={(e) =>
                          dispatch(
                            editBuildingName({
                              id: building.id,
                              value: e.target.value,
                            })
                          )
                        }
                        onBlur={(e) => {
                          onEditBuildingName(-1);
                          if (e.target.value === "") {
                            dispatch(discardEmptyBuilding());
                          } else {
                            dispatch(
                              saveBuilding({
                                id: building.id,
                                name: e.target.value,
                              })
                            );
                          }
                        }}
                      />
                    ) : (
                      <Typography
                        variant="h5"
                        onClick={() => onEditBuildingName(building.id)}
                      >
                        {building.name}
                      </Typography>
                    )}
                  </>
                }
                highlighted={index === cardHighlighted}
                removable
                onRemove={() => onRemoveBuilding(building.id)}
              >
                <Grid container direction="column" spacing={1}>
                  {building.floorIds.map((floorId) => {
                    const floor = floors.find((f) => f.id === floorId);

                    if (floor) {
                      return (
                        <Grid item key={String(floor.id)}>
                          <Input
                            id={String(floor.id)}
                            value={floor.name}
                            removable
                            hideborder
                            autoFocus={floor.id === null}
                            onFocus={() => setCardHighlighted(index)}
                            onRemove={() => onRemoveFloor(floor.id)}
                            onChange={(e) =>
                              dispatch(
                                editFloorName({
                                  id: floor.id,
                                  value: e.target.value,
                                })
                              )
                            }
                            onBlur={(e) => {
                              if (floor.name === "") {
                                dispatch(discardEmptyFloor(building.id));
                              } else {
                                dispatch(
                                  saveFloorName({
                                    id: floor.id,
                                    name: e.target.value,
                                  })
                                );
                              }
                            }}
                          />
                        </Grid>
                      );
                    }
                    return null;
                  })}
                  <Grid item>
                    <Button
                      startIcon={<img src={addIcon} alt="add" />}
                      onClick={() => onAddNewFloor(building.id)}
                    >
                      Add Floor
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          );
        })}
      <Grid item>
        <AddEntityButton onClick={addBuilding}>Add Building</AddEntityButton>
      </Grid>
    </Grid>
  );
};

export default withNavigationBar(Buildings);
