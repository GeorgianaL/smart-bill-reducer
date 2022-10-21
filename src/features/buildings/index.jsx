import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  Backdrop,
  CircularProgress,
  Button as ButtonBase,
} from "@mui/material";
import {
  getBuildings,
  saveBuilding,
  deleteBuilding,
  getFloors,
  deleteFloor,
  saveFloor,
  addPicture,
} from "../../actions";
import {
  editFloor,
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
import PhotoUploader from "../../components/photo-uploader";
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

  const onUploadPicture = (file) => {
    dispatch(addPicture(file)).then((response) => {
      const mapUrl = response.payload.url;
      // to change: id should not be null at this moment
      dispatch(editFloor({ id: null, field: "mapUrl", value: mapUrl }));
    });
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
                        <>
                          {floor.id === null && (
                            <>
                              <Grid item>
                                <Typography variant="h6">Add floor</Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle1">
                                  Add the floor name you want to be able to
                                  manage. Pick specific names.
                                </Typography>
                              </Grid>
                            </>
                          )}
                          <Grid item>
                            <Grid
                              container
                              direction="row"
                              alignItems="center"
                              spacing={6}
                            >
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
                                      editFloor({
                                        id: floor.id,
                                        field: "name",
                                        value: e.target.value,
                                      })
                                    )
                                  }
                                  onBlur={(e) => {
                                    if (floor.name === "") {
                                      dispatch(discardEmptyFloor(building.id));
                                    } else {
                                      dispatch(
                                        saveFloor({
                                          id: floor.id,
                                          buildingId: building.id,
                                          name: e.target.value,
                                        })
                                      );
                                    }
                                  }}
                                />
                              </Grid>
                              {
                                <Grid item>
                                  <PhotoUploader
                                    url={floor.mapUrl}
                                    name={floor.name}
                                  />
                                </Grid>
                              }
                            </Grid>
                          </Grid>
                          {floor.id === null && floor.name !== "" && (
                            <>
                              <Grid item>
                                <Typography variant="subtitle1">
                                  Add the floor map. You will use this map to
                                  create zones, add sensors, relays etc
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Grid
                                  container
                                  direction="row"
                                  spacing={2}
                                  alignItems="center"
                                >
                                  <Grid item>
                                    <ButtonBase
                                      variant="contained"
                                      component="label"
                                      onChange={(e) =>
                                        onUploadPicture(e.target.files[0])
                                      }
                                    >
                                      {floor.map ? "Change image" : "Upload"}
                                      <input
                                        hidden
                                        accept="image/png"
                                        multiple
                                        type="file"
                                      />
                                    </ButtonBase>
                                  </Grid>
                                  <Grid item>
                                    {floor.map && (
                                      <Typography variant="subtitle1">
                                        {floor.map.name}
                                      </Typography>
                                    )}
                                  </Grid>
                                </Grid>
                              </Grid>
                            </>
                          )}
                        </>
                      );
                    }
                    return null;
                  })}
                  <Grid item sx={{ marginTop: 2 }}>
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
