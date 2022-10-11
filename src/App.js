import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./hoc/PrivateRoute";
import { theme, links } from "./utils";
import "./App.css";
import { Login, NotAuthorizedPage } from "./features/login";

const App = ({ isLoggedIn }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {links.map((link) => (
          <Route
            key={link.label}
            path={link.path}
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {link.component}
              </PrivateRoute>
            }
          />
        ))}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<NotAuthorizedPage />} />
      </Routes>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(App);
