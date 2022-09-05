import React from "react";
import { Grid, Typography } from "@mui/material";

const Page = ({ title, children }) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="body1">{title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">UBC 1 Building</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default Page;
