import * as React from "react";
import { styled } from "@mui/material/styles";
import { default as ButtonBase } from "@mui/material/Button";

const StyledButton = styled(ButtonBase)(() => ({
  // color: "black",
  fontWeight: "bold",
  padding: 0,
}));

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export { default as AddEntityButton } from "./AddEntityButton";
export default Button;
