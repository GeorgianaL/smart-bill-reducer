import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Drawer from "../components/drawer";

const Container = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

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
    <Container>
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
    </Container>
  );
};

export default withNavigationBar;
