import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import Circle from "../../../../assets/Circle.svg";

const LinkedZones = ({ handleChange, options, value }) => {
  const [selectedOptions, setSelectedOptions] = useState(value);

  const addNewZone = () => {
    setSelectedOptions([
      ...selectedOptions,
      {
        id: "12345",
        name: "",
      },
    ]);
  };

  return (
    <>
      <Grid item>
        {selectedOptions.map((selectedOption) => (
          <FormControl variant="standard" fullWidth>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={selectedOption}
              onChange={handleChange}
              label="Age"
            >
              {options.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </Grid>
      <Grid item>
        <Button
          variant="underlined"
          startIcon={<img src={Circle} alt="add" style={{ width: 18 }} />}
          onClick={addNewZone}
        >
          <span className="label">Add linked zone</span>
        </Button>
      </Grid>
    </>
  );
};

LinkedZones.defaultProps = {
  value: [],
  options: [
    {
      id: 1234,
      name: "Zone 1",
    },
    {
      id: 1634,
      name: "Zone N",
    },
    {
      id: 1134,
      name: "Zone 23",
    },
    {
      id: 1224,
      name: "Zone 11",
    },
  ],
};

export default LinkedZones;
