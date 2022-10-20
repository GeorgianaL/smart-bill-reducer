import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Backdrop,
  CircularProgress,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import Card from "../../components/card";
import Input from "../../components/input";
import theme from "../../utils/theme";
import Logo from "../../components/logo";
import { AddEntityButton } from "../../components/button";
import { addBuilding } from "../../actions";

const Layout = styled.div`
  padding: 30px 100px;
  background-color: ${theme.palette.grey[500]};
`;

const BuildingSetup = () => {
  const navigate = useNavigate();
  const [cardHighlighted, setCardHighlighted] = useState(-1);
  const [buildingName, updateBuildingName] = useState("");
  const [floors, updateFloors] = useState([""]);

  const addNewFloor = () => {
    const newFloorsList = [...floors, ""];
    setCardHighlighted(newFloorsList.length);
    updateFloors(newFloorsList);
  };

  const updateFloorName = (newValue, index) => {
    updateFloors(floors.map((name, i) => (i === index ? newValue : name)));
  };

  const { loading } = useSelector((state) => state.buildings);

  const dispatch = useDispatch();

  const onSave = () => {
    const payload = {
      name: buildingName,
      floors,
    };
    dispatch(addBuilding(payload)).then(() => navigate("/buildings"));
  };

  return (
    <Layout>
      {loading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <Card>
              <Typography variant="h3">Setup your building</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card highlighted={cardHighlighted === -1}>
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Typography variant="h5" color="primary">
                    Name your building
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    What is your building’s name? You can add more buildings
                    later.
                  </Typography>
                </Grid>
                <Grid item>
                  <Input
                    placeholder="Building name"
                    variant="outlined"
                    value={buildingName}
                    onChange={(e) => updateBuildingName(e.target.value)}
                    onFocus={() => setCardHighlighted(-1)}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          {floors.map((floorName, index) => (
            <Grid item key={index}>
              <Card highlighted={cardHighlighted === index}>
                <Grid container spacing={2} direction="column">
                  <Grid item>
                    <Typography variant="h5">Add floor</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Add the floor name you want to be able to manage. Pick
                      specific names.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Input
                      placeholder="Floor name"
                      variant="outlined"
                      value={floorName}
                      onChange={(e) => updateFloorName(e.target.value, index)}
                      onFocus={() => setCardHighlighted(index)}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Add the floor map. You will use this map to create zones,
                      add sensors, relays etc
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" component="label">
                      Upload
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
          <Grid item>
            <AddEntityButton onClick={addNewFloor}>Add Floor</AddEntityButton>
          </Grid>
          <Grid item container justifyContent="flex-end">
            <Button
              variant="contained"
              disabled={buildingName === ""}
              onClick={onSave}
            >
              Get started
            </Button>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
};

export default BuildingSetup;