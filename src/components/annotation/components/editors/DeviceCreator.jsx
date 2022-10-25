import React from "react";
import { Grid } from "@mui/material";
import Input from "../../../input";

const DeviceCreator = ({ annotation, onChange }) => {
  return (
    <Grid container direction="column" spacing={2}>
      {/* <Grid item>
        <Input
          required
          id="entity-id"
          placeholder="ID"
          onChange={(e) =>
            onChange({
              ...annotation,
              data: {
                ...annotation.data,
                id: e.target.value,
              },
            })
          }
          value={annotation.data && annotation.data.id}
          variant="standard"
        />
      </Grid> */}
      <Grid item>
        <Input
          required
          id="entity-name"
          placeholder="Name"
          onChange={(e) =>
            onChange({
              ...annotation,
              data: {
                ...annotation.data,
                name: e.target.value,
              },
            })
          }
          value={annotation.data && annotation.data.name}
          variant="standard"
        />
      </Grid>
    </Grid>
  );
};

DeviceCreator.defaultProps = {
  title: "Zone",
};

export default DeviceCreator;
