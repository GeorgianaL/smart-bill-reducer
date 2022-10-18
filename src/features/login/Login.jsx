import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import Logo from "../../components/logo";
import Input from "../../components/input";
import { login } from "../../actions";
import { Layout, StyledImage, CentralInfo } from "./styles";
// import buildingIlustration from "../../assets/SignUpIlustration.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const authenticate = () => {
    dispatch(login({ email, password })).then(() => navigate("/dashboard"));
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
                {/* <StyledImage src={buildingIlustration} alt="building" /> */}
              </Grid>
              <Grid
                item
                lg={6}
                md={12}
                sm={12}
                sx={{ minWidth: 450, paddingRight: 22 }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    marginBottom: 8,
                    "@media (max-width:1200px)": {
                      marginBottom: 1,
                    },
                  }}
                >
                  Login to reduce your energy bill smartly
                </Typography>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Input
                      fullWidth
                      type="email"
                      label="Email address"
                      placeholder="youremail@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <Input
                      fullWidth
                      type="password"
                      label="Password"
                      placeholder="password (at least 6 characters)"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item sx={{ marginTop: 4 }}>
                    <Button
                      fullWidth
                      color="primary"
                      variant="contained"
                      onClick={authenticate}
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
