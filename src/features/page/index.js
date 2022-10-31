import React from "react";
import { Grid, Typography } from "@mui/material";
import BuildingSelector from "./BuildingSelector";

const Page = ({ title, children, withBuildingSelector }) => {
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
          {withBuildingSelector && (
            <Grid item>
              <BuildingSelector />
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};

Page.defaultProps = {
  withBuildingSelector: true,
};

export { default as FloorSelector } from "./FloorSelector";
export { default as DaySelector } from "./DaySelector";
export { default as ZoneSelector } from "./ZoneSelector";

export default Page;
