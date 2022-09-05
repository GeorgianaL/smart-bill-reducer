import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import theme from "./utils/theme";
import Login from "./features/login";
import { StartingPoint, BuildingSetup } from "./features/onboarding";
import "./App.css";
import links from "./utils/pages";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<StartingPoint />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<BuildingSetup />} />
        {links.map((link) => (
          <Route key={link.label} path={link.path} element={link.component} />
        ))}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
