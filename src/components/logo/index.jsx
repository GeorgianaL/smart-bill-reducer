import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import theme from "../../utils/theme";
import logoSrc from "../../assets/Logo.svg";

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledText = styled.span`
  color: ${theme.palette.primary.main};
  font-weight: 600;
  font-size: 24px;
`;

const Logo = ({ hideText }) => (
  <Grid container direction="row" spacing={1} alignItems="center">
    <Grid item>
      <StyledImage src={logoSrc} alt="logo" />
    </Grid>
    {!hideText && (
      <Grid item>
        <StyledText>SBR</StyledText>
      </Grid>
    )}
  </Grid>
);

export default Logo;
