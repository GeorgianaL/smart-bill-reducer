import React from "react";
import { styled } from "@mui/material/styles";
import { Tab as TabBase, Tabs as BaseTabs } from "@mui/material";

const Tab = styled(TabBase)(({ theme }) => ({
  "&.MuiButtonBase-root.MuiTab-root": {
    textTransform: "none",
    textDecoration: "none",
  },
  "&.MuiButtonBase-root.MuiTab-root.Mui-selected": {
    padding: "4px 6px",
  },
  "> .active": {
    backgroundColor: "#F5F5F5",
  },
}));

const Tabs = ({ tabsList, activeIndex, handleChange }) => (
  <BaseTabs
    value={activeIndex}
    onChange={(event, newValue) => handleChange(newValue)}
    aria-label="tabs"
  >
    {tabsList.map((tab, index) => (
      <Tab
        label={tab}
        key={tab}
        value={index}
        classes={{
          root: index === activeIndex ? "active" : "inactive",
        }}
      />
    ))}
  </BaseTabs>
);

export default Tabs;
