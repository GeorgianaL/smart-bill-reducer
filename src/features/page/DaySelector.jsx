import React from "react";
import { FormControl } from "@mui/material";
import Select from "../../components/select";

const options = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const DaySelector = ({ value, onChange, variant, multiple }) => {
  const valOptions = options.map((option) => ({ name: option, id: option }));
  let currentValue = value;

  if (multiple) {
    currentValue = value.reduce((acc, option) => {
      const val = valOptions.find((opt) => opt.id === option);
      return [...acc, val];
    }, []);
  }

  return (
    <FormControl variant="standard">
      <Select
        id="select-day"
        value={currentValue}
        onChange={onChange}
        label="Floor"
        values={valOptions}
        variant={variant}
        multiple={multiple}
      />
    </FormControl>
  );
};

export default DaySelector;
