import * as React from "react";
import { styled } from "@mui/material/styles";
import { default as ChipBase } from "@mui/material/Chip";

const labels = {
  on: "Power on",
  off: "Power off",
};

const StyledChip = styled(ChipBase)(({ theme }) => ({
  backgroundColor: "#E7FCF0",
  color: "#34B53A",
  "&.disabled": {
    backgroundColor: "#EEEEEE",
    color: "#636363",
  },
}));

const Chip = ({ value }) => (
  <StyledChip
    label={value ? labels.on : labels.off}
    size="small"
    classes={{
      root: value ? "enabled" : "disabled",
    }}
  />
);

export default Chip;
