import * as React from "react";
import { IconButton } from "@mui/material";
import Logo from "../logo";
import menuIcon from "../../assets/menu.svg";

import { StyledToolbar, Nav, MenuList } from "./styles";

const MobileMenu = ({ menu }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <StyledToolbar>
      <Nav>
        <Logo />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <img src={menuIcon} alt="menu" />
        </IconButton>
      </Nav>
      {mobileOpen && <MenuList>{menu}</MenuList>}
    </StyledToolbar>
  );
};

export default MobileMenu;
