import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import styled from "styled-components";
import theme from "../../utils/theme";
import logoSrc from "../../assets/Logov2.svg";

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledText = styled.span`
  color: ${theme.palette.primary.main};
  font-weight: 600;
  font-size: 24px;
`;

const Logo = ({ hideText }) => {
  const navigate = useNavigate();
  const goToIndex = () => navigate("/");

  return (
    <Grid
      container
      direction="row"
      // spacing={1}
      alignItems="center"
      onClick={goToIndex}
      sx={{ cursor: "pointer" }}
    >
      <Grid item sx={{ margin: "auto" }}>
        <StyledImage src={logoSrc} alt="logo" />
      </Grid>
      {/* {!hideText && (
        <Grid item>
          <StyledText>SBR</StyledText>
        </Grid>
      )} */}
    </Grid>
  );
};

export default Logo;
