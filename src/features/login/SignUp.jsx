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
import Input from "../../components/input";
import { signup } from "../../actions";
import { Layout, StyledImage, CentralInfo } from "./styles";
import buildingIlustration from "../../assets/SignUpIlustration.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [emailValidationErr, setEmailValidationErr] = useState("");
  const [validationErr, setValidationErr] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const validateEmail = () => {
    const isValid = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!isValid) {
      setEmailValidationErr("Email is invalid");
    } else {
      setEmailValidationErr("");
    }
  };

  const validate = () => {
    if (password !== "" && confirmedPassword !== "") {
      if (password !== confirmedPassword) {
        setValidationErr("Passwords don't match");
      } else {
        setValidationErr("");
      }
      if (password.length < 6) {
        setValidationErr("Passwords should have at least 6 characters");
      } else {
        setValidationErr("");
      }
    }
  };

  const authenticate = async () => {
    const auth = await dispatch(
      signup({ email, name: username, pwd: password })
    );

    if (auth && auth.payload) {
      navigate("/login");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      authenticate();
    }
  };

  const { loading, error } = useSelector((state) => state.user);

  return (
    <Layout>
      <Grid container direction="column" spacing={4}>
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
                    Sign up to reduce your energy bill smartly
                  </Typography>
                  <Grid container direction="column" spacing={2}>
                    {error && (
                      <Grid item>
                        <Alert severity="error">
                          An unknown error occured. Please try again.
                        </Alert>
                      </Grid>
                    )}
                    {(validationErr || emailValidationErr) && (
                      <Grid item>
                        <Alert severity="error">
                          {validationErr || emailValidationErr}
                        </Alert>
                      </Grid>
                    )}
                    <Grid item>
                      <Input
                        fullWidth
                        type="email"
                        label="Email address"
                        placeholder="youremail@gmail.com"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validate}
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        fullWidth
                        type="text"
                        label="Username"
                        placeholder="Username"
                        pattern=".{6,}"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onBlur={validate}
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        fullWidth
                        type="password"
                        label="Password"
                        placeholder="password (at least 6 characters)"
                        value={password}
                        pattern=".{6,}"
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={validateEmail}
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        fullWidth
                        type="password"
                        label="Confirm password"
                        placeholder="password"
                        value={confirmedPassword}
                        pattern=".{6,}"
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                        onBlur={validate}
                        onKeyDown={handleKeyDown}
                      />
                    </Grid>
                    <Grid item sx={{ marginTop: 4 }}>
                      <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        onClick={authenticate}
                        disabled={
                          email === "" ||
                          username === "" ||
                          password === "" ||
                          confirmedPassword === "" ||
                          validationErr !== ""
                        }
                      >
                        Sign up
                      </Button>
                    </Grid>
                    <Grid item sc={{ alignItems: "center" }}>
                      <Typography variant="body2">
                        Already have an account? <a href="/login">Log in</a>
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

export default SignUp;
