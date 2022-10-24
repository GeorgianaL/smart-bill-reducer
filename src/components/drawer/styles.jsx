import { styled } from "@mui/material/styles";
import { Drawer as DrawerBase, Toolbar } from "@mui/material";

export const drawerWidth = 240;
export const closedDrawerWidth = 65;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  // width: `calc(${theme.spacing(7)} + 1px)`,
  width: closedDrawerWidth,
  // [theme.breakpoints.up("sm")]: {
  //   width: `calc(${theme.spacing(8)} + 1px)`,
  // },
});

export const StyledDrawer = styled(DrawerBase, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      border: "none",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      border: "none",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
  }),
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "white",
    img: {
      width: 30,
    },
  },
}));

export const Nav = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  paddingTop: 16,
  button: {
    marginRight: 0,
  },
}));
