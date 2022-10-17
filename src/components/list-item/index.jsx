import * as React from "react";
import styled from "styled-components";
import { Grid, Typography } from "@mui/material";

const Decoration = styled.div`
  ${(props) => ({
    width: 8,
    height: 8,
    borderRadius: 20,
    backgroundColor: `${props.color || "black"}`,
  })}
`;

const ListItem = ({ color, label }) => (
  <Grid container spacing={1} alignItems="center">
    <Grid item>
      <Decoration color={color} />
    </Grid>
    <Grid item>
      <Typography variant="body2">{label}</Typography>
    </Grid>
  </Grid>
);

export default ListItem;
