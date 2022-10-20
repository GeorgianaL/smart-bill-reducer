import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import { default as SelectBase } from "@mui/material/Select";

import arrowDown from "../../assets/arrow-down.svg";

const ArrowDropDownComponent = () => <img src={arrowDown} alt="arrow-down" />;

const Container = styled(FormControl)(() => ({
  margin: 0,
  "&.FormControlStandard": {
    ".MuiInputBase-root": {
      height: 40,
      paddingRight: 24,
    },
    ".MuiSelect-select": {
      paddingLeft: 0,
    },
  },
  "&.FormControlOutlined": {
    ".MuiInputBase-root": {
      width: 233,
      height: 40,
      ".MuiSelect-outlined": {
        paddingLeft: 0,
      },
      fieldset: {
        borderBottom: 2,
      },
    },
  },
  "&.FormControlFilled": {
    width: 233,
    ".MuiInputBase-root": {
      height: 40,
      borderRadius: 22,
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      paddingLeft: 10,
      paddingRight: 24,
    },
    img: {
      filter:
        "invert(0%) sepia(58%) saturate(543%) hue-rotate(41deg) brightness(107%) contrast(103%)",
    },
  },
  ".MuiOutlinedInput-root": {
    fieldset: {
      borderWidth: 0,
    },
    "&.Mui-focused fieldset": {
      borderWidth: 0,
    },
  },
  ".MuiInputBase-input": {
    "&:focus": {
      backgroundColor: "transparent",
    },
  },
}));

const SelectTypesClassnames = {
  standard: "FormControlStandard",
  outlined: "FormControlOutlined",
  filled: "FormControlFilled",
  underlined: "FormControlUnderlined",
};

const Select = ({ onChange, value, values, multiple, variant, ...props }) => {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <Container
      variant={variant}
      classes={{
        root: SelectTypesClassnames[variant],
      }}
      {...props}
    >
      <SelectBase
        id="select"
        value={value}
        onChange={handleChange}
        input={<OutlinedInput />}
        multiple={multiple}
        IconComponent={ArrowDropDownComponent}
      >
        {values.map((val) => (
          <MenuItem key={val.id} value={multiple ? val : val.id}>
            {val.name}
          </MenuItem>
        ))}
      </SelectBase>
    </Container>
  );
};

Select.defaultProps = {
  variant: "standard",
  multiple: false,
};

export default Select;
