import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const Label = styled(FormControlLabel)(({ theme }) => ({
  "> .MuiTypography-root": {
    fontWeight: 500,
  },
}));

const Filters = ({ title, data }) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>{title}</Grid>
      <Grid item>
        <FormGroup>
          {data.length > 2 && <Label control={<Checkbox />} label="All" />}
          {data.map((item) => (
            <Label control={<Checkbox />} label={item} />
          ))}
        </FormGroup>
      </Grid>
    </Grid>
  );
};

export default Filters;