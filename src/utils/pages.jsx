import { Login, NotAuthorizedPage } from "../features/login";
import { StartingPoint, BuildingSetup } from "../features/onboarding";
import Dashboard from "../features/dashboard";
import Buildings from "../features/buildings";
import Map from "../features/map";
import Schedules from "../features/schedules";
import Suggestions from "../features/suggestions";
import Profile from "../features/profile";

import dashboardIcon from "../assets/dashboard.svg";
import buildingIcon from "../assets/building.svg";
import mapIcon from "../assets/map.svg";
import schedulesIcon from "../assets/schedules.svg";
import suggestionsIcon from "../assets/lightbulb.svg";
import profileIcon from "../assets/profile.svg";
import settingsIcon from "../assets/settings.svg";

export const menuLinks = [
  {
    label: "Dashboard",
    icon: dashboardIcon,
    path: "/",
    component: <Dashboard />,
  },
  {
    label: "Buildings",
    icon: buildingIcon,
    path: "/buildings",
    component: <Buildings />,
  },

  {
    label: "Map",
    icon: mapIcon,
    path: "/map",
    component: <Map />,
  },

  {
    label: "Schedules",
    icon: schedulesIcon,
    path: "/schedules",
    component: <Schedules />,
  },

  {
    label: "Suggestions",
    icon: suggestionsIcon,
    path: "/suggestions",
    component: <Suggestions />,
  },
  {
    label: "Profile",
    icon: profileIcon,
    path: "/profile",
    component: <Profile />,
  },
  {
    label: "Settings",
    icon: settingsIcon,
    path: "/settings",
    component: <Profile />,
  },
];

const links = [
  ...menuLinks,
  {
    label: "StartingPoint",
    icon: dashboardIcon,
    path: "/start",
    component: <StartingPoint />,
  },
  {
    label: "Onboarding",
    icon: null,
    path: "/onboarding",
    component: <BuildingSetup />,
  },
];

export default links;
