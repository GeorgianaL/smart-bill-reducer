import * as React from "react";
import styled from "styled-components";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { StyledDrawer, drawerWidth, closedDrawerWidth } from "./styles";
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

  return (
    <StyledDrawer
      variant="permanent"
      open={open}
      onMouseEnter={onOpenDrawer}
      onMouseLeave={onCloseDrawer}
      // onClick={open ? onCloseDrawer : onOpenDrawer}
    >
      <List>
        <ListItem alignItems="center">
          <Logo hideText={!open} />
        </ListItem>
        <Divider light variant="middle" />
        {menuLinks.map((link, index) => (
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
        ))}
      </List>
    </StyledDrawer>
  );
};

export { drawerWidth, closedDrawerWidth };

export default Drawer;
