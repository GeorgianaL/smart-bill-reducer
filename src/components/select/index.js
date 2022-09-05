import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import { default as SelectBase } from "@mui/material/Select";

const Container = styled(FormControl)(({ theme }) => ({
  width: 233,
  margin: 0,
  ".MuiInputBase-root": {
    height: 40,
    borderRadius: 12,
  },

  ".MuiOutlinedInput-root": {
    fieldset: {
      borderColor: theme.palette.grey[400],
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.grey[400],
      borderWidth: 1,
    },
  },
}));

const Select = ({ onChange, value, values, multiple }) => {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    onChange(value);
  };

  return (
    <Container>
      <SelectBase
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={value}
        onChange={handleChange}
        input={<OutlinedInput />}
        multiple={multiple}
      >
        {values.map((val) => (
          <MenuItem key={val.id} value={val.id}>
            {val.name}
          </MenuItem>
        ))}
      </SelectBase>
    </Container>
  );
};

export default Select;
