import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const Label = styled(FormControlLabel)(() => ({
  "> .MuiTypography-root": {
    fontWeight: 500,
  },
}));

const Filters = ({ allOptions, selected, title, onChange }) => {
  const onChangeAll = () => {
    if (allOptions.length === selected.length) {
      onChange([]);
    } else {
      onChange(allOptions);
    }
  };

  const onChangeFilters = (selection) => {
    if (selected.find((filter) => filter.id === selection.id)) {
      onChange(selected.filter((item) => item.id !== selection.id));
    } else {
      onChange([...selected, selection]);
    }
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>{title}</Grid>
      <Grid item>
        <FormGroup>
          {allOptions.length > 2 && (
            <Label
              control={
                <Checkbox
                  checked={allOptions.length === selected.length}
                  onChange={onChangeAll}
                />
              }
              label="All"
            />
          )}
          {allOptions.map((item) => (
            <Label
              key={item.id}
              control={
                <Checkbox
                  checked={selected.includes(item)}
                  onChange={() => onChangeFilters(item)}
                />
              }
              label={item.name}
            />
          ))}
        </FormGroup>
      </Grid>
    </Grid>
  );
};

export default Filters;
