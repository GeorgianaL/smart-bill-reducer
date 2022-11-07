import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./hoc/PrivateRoute";
import { theme, links } from "./utils";
import "./App.css";
import { Login, SignUp, NotAuthorizedPage } from "./features/login";
import Dashboard from "./features/dashboard";

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
          index
          path="/"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn} redirectTo="/login">
              <Dashboard />
            </PrivateRoute>
          }
        />
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/unauthorized" element={<NotAuthorizedPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
