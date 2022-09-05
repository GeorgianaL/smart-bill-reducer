import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { getBuildings, getFloors } from "../../slices/actions";
import withNavigationBar from "../../hoc/withNavigationBar";
import Card from "../../components/card";
import Input from "../../components/input";
import { AddEntityButton } from "../../components/button";

const Buildings = () => {
  const [cardHighlighted, setCardHighlighted] = useState(0);
  const dispatch = useDispatch();

  const { buildings, floors, loading } = useSelector(
    (state) => state.buildings
  );

  useEffect(() => {
    dispatch(getBuildings());
    dispatch(getFloors());
  }, []);

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Card>
          <Typography variant="h3">Your buildings</Typography>
        </Card>
      </Grid>
      {buildings.map((building, index) => {
        return (
          <Grid item key={String(building.id)}>
            <Card
              title={<Typography variant="h5">{building.name}</Typography>}
              highlighted={index === cardHighlighted}
              removable
            >
              <Grid container direction="column">
                {building.floorIds.map((floorId) => {
                  const floor = floors.find((f) => f.id === floorId);
                  return (
                    <Grid item key={String(floor.id)}>
                      <Input
                        id={String(floor.id)}
                        value={floor.name}
                        removable
                        hideborder
                        onFocus={() => setCardHighlighted(index)}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Card>
          </Grid>
        );
      })}
      <Grid item>
        <AddEntityButton>Add Building</AddEntityButton>
      </Grid>
    </Grid>
  );
};

export default withNavigationBar(Buildings);
