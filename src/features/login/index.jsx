import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import Logo from "../../components/logo";
import Input from "../../components/input";
import buildingIlustration from "../../assets/SignUpIlustration.svg";

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

const Login = () => {
  const navigate = useNavigate();
  const navigateToBuildings = () => {
    // TODO: POST login
    navigate("/buildings");
  };

  return (
    <Layout>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <CentralInfo>
            <Grid
              spacing={8}
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item lg={6} md={12} sm={12}>
                <StyledImage src={buildingIlustration} alt="building" />
              </Grid>
              <Grid
                item
                lg={6}
                md={12}
                sm={12}
                sx={{ minWidth: 450, paddingRight: 22 }}
              >
                <Typography variant="h3" sx={{ marginBottom: 8 }}>
                  Login to reduce your energy bill smartly
                </Typography>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Input
                      fullWidth
                      type="email"
                      label="Email address"
                      placeholder="youremail@gmail.com"
                    />
                  </Grid>
                  <Grid item>
                    <Input
                      fullWidth
                      type="password"
                      label="Password"
                      placeholder="password (at least 6 characters)"
                    />
                  </Grid>
                  <Grid item sx={{ marginTop: 4 }}>
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      onClick={navigateToBuildings}
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid item sc={{ alignItems: "center" }}>
                    <Typography variant="body2">
                      Don't you have an account? Sign up
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CentralInfo>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Login;
