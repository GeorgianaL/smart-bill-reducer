import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import Logo from "../../components/logo";
import buildingIlustration from "../../assets/BuildingIlustration.png";
const Layout = styled.div`
  padding: 30px 50px;
`;

const StyledImage = styled.img`
  position: relative;
  float: right;
  padding-right: 100px;

  @media (max-width: 1200px) {
    float: left;
  }
`;

const CentralInfo = styled.div`
  margin-top: 10%;
`;

const Text = styled.div`
  max-width: 420px;
  margin: 24px 0px;
`;

const StartingPoint = () => (
  <Layout>
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Logo />
      </Grid>

      <Grid item>
        <CentralInfo>
          <Grid
            spacing={2}
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item lg={6} md={12} sm={12}>
              <StyledImage src={buildingIlustration} alt="building" />
            </Grid>
            <Grid item lg={6} md={12} sm={12}>
              <Typography variant="h3">Start by defining your space</Typography>
              <Text>
                <Typography variant="subtitle1">
                  To start monitoring and managing your energy consumption in
                  your building, start by defining your physical space.
                </Typography>
              </Text>
              <Text>
                <Typography variant="subtitle1">
                  Add buildings, floors and maps, to easily visualize your
                  managing perimeter.
                </Typography>
              </Text>
              <Link to="/onboarding" style={{ textDecoration: "none" }}>
                <Button color="primary" variant="contained">
                  Begin
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CentralInfo>
      </Grid>
    </Grid>
  </Layout>
);

export default StartingPoint;
