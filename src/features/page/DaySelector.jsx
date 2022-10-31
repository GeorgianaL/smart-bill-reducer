import React from "react";
import { Typography, FormControl } from "@mui/material";
import Select from "../../components/select";

const options = [
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
  { label: "Saturday", value: "saturday" },
  { label: "Sunday", value: "sunday" },
];

const DaySelector = ({ value, onChange, variant, multiple }) => {
  return (
    <FormControl variant="standard">
      <Select
        id="select-day"
        value={value}
        onChange={onChange}
        label="Floor"
        values={options}
        variant={variant}
        multiple={multiple}
      />
    </FormControl>
  );
};

export default DaySelector;
