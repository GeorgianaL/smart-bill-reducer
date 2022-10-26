import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  Alert,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import Logo from "../../components/logo";
import Input from "../../components/input";
import { login } from "../../actions";
import { Layout, StyledImage, CentralInfo } from "./styles";
import buildingIlustration from "../../assets/SignUpIlustration.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const authenticate = async () => {
    const auth = await dispatch(login({ email, pwd: password }));
    if (auth && auth.payload && auth.payload.success) {
      navigate("/dashboard");
    }
  };

  const { loading, error } = useSelector((state) => state.user);

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
              {loading ? (
                <Backdrop open>
                  <CircularProgress color="inherit" />
                </Backdrop>
              ) : (
                <Grid
                  item
                  lg={6}
                  md={12}
                  sm={12}
                  sx={{
                    "@media (max-width:480px)": {
                      paddingRight: 1,
                    },
                    "@media (min-width:480px)": {
                      maxWidth: 480,
                    },
                    "@media (max-width:1200px)": {
                      maxWidth: "100%",
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: 8,
                      "@media (max-width:480px)": {
                        marginBottom: 2,
                      },
                    }}
                  >
                    Login to reduce your energy bill smartly
                  </Typography>
                  <Grid container direction="column" spacing={2}>
                    {error && (
                      <Grid item>
                        <Alert severity="error">
                          An unknown error occured. Please try again.
                        </Alert>
                      </Grid>
                    )}
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
              )}
            </Grid>
          </CentralInfo>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Login;
