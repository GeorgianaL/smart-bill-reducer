import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import Drawer, { drawerWidth, closedDrawerWidth } from "../components/drawer";

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
    <Grid container>
      <Grid item>
        <Drawer
          open={open}
          onOpenDrawer={() => handleDrawer(true)}
          onCloseDrawer={() => handleDrawer(false)}
          activeLink={activeLink}
          onChangePage={navigateToPage}
        />
      </Grid>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${open ? drawerWidth : closedDrawerWidth}px)`,
        }}
      >
        <WrappedComponent {...props} />
      </Box>
    </Grid>
  );
};

export default withNavigationBar;
