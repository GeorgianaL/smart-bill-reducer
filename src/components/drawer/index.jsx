import * as React from "react";
import styled from "styled-components";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as DrawerBase,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StyledDrawer, drawerWidth, closedDrawerWidth } from "./styles";
import MobileMenu from "./MobileMenu";
import Logo from "../logo";

import { menuLinks } from "../../utils/pages";

const Icon = styled.img(({ active }) => ({
  fill: active ? "green" : "black",
  filter: active
    ? "invert(0%) sepia(58%) saturate(543%) hue-rotate(41deg) brightness(107%) contrast(103%)"
    : "",
}));

const Drawer = ({
  open,
  onOpenDrawer,
  onCloseDrawer,
  activeLink,
  onChangePage,
}) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const links = menuLinks.map((link, index) => (
    <ListItem
      key={link.label}
      sx={{
        display: "block",
        paddingBottom: "1rem",
        paddingTop: index === menuLinks.length - 2 ? "5rem" : "1rem",
      }}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
        onClick={() => onChangePage(link.path)}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          <Icon
            active={link.path === activeLink}
            src={link.icon}
            alt={link.label}
          />
        </ListItemIcon>
        <ListItemText
          sx={{
            opacity: open ? 1 : 0,
            color:
              link.path === activeLink
                ? theme.palette.primary.main
                : theme.palette.grey[300],
          }}
          primary={link.label}
        />
      </ListItemButton>
    </ListItem>
  ));

  return (
    <>
      <MobileMenu menu={links} />
      <DrawerBase
        // container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      ></DrawerBase>
      <StyledDrawer
        container={container}
        variant="permanent"
        open={open}
        onMouseEnter={onOpenDrawer}
        onMouseLeave={onCloseDrawer}
        // onClick={open ? onCloseDrawer : onOpenDrawer}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <List>
          <ListItem alignItems="center">
            <Logo hideText={!open} centered />
          </ListItem>
          <Divider light variant="middle" />
          {links}
        </List>
      </StyledDrawer>
    </>
  );
};

export { drawerWidth, closedDrawerWidth };

export default Drawer;
