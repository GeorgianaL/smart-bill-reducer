import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import { Layout, StyledImage, CentralInfo, Text } from "./styles";
import thanksIlustration from "../../assets/ThanksIlustration.svg";

const NotAuthorizedPage = () => {
  return (
    <Layout>
      <Grid container direction="column" spacing={4}>
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
                <StyledImage src={thanksIlustration} alt="building" />
              </Grid>
              <Grid item lg={6} md={12} sm={12}>
                <Typography variant="h3">
                  Hey man, you're not authorized
                </Typography>
                <Text>
                  <Typography variant="subtitle1">
                    You should login to monitor and manage your energy
                    consumption in your building
                  </Typography>
                </Text>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button color="primary" variant="contained">
                    Login
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </CentralInfo>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default NotAuthorizedPage;
