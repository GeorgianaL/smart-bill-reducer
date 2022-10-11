import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Drawer from "../components/drawer";

const withNavigationBar = (WrappedComponent) => (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, handleDrawer] = React.useState(true);
  const [activeLink, setActiveLink] = useState(location.pathname);

  const navigateToPage = (path) => {
    navigate(path);
    setActiveLink(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        open={open}
        onOpenDrawer={() => handleDrawer(true)}
        onCloseDrawer={() => handleDrawer(false)}
        activeLink={activeLink}
        onChangePage={navigateToPage}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <WrappedComponent {...props} />
      </Box>
    </Box>
  );
};

export default withNavigationBar;
