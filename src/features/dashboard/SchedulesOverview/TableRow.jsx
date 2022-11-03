import React from "react";
import { TableCell, TableRow, IconButton } from "@mui/material";
import Chip from "../../../components/chip";
import Radio from "../../../components/radio";

import eyeIcon from "../../../assets/Eye.svg";
import editIcon from "../../../assets/edit.svg";

const Row = ({
  id,
  building,
  scheduleStatus,
  floors,
  zones,
  details,
  goToMap,
  goToEdit,
  ...props
}) => {
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {building}
        </TableCell>
        <TableCell>{floors.join(",")}</TableCell>
        <TableCell>{zones.join(",")}</TableCell>
        <TableCell>
          <IconButton aria-label="edit-schedule" onClick={() => goToMap(id)}>
            <img src={eyeIcon} alt="see floor's map" />
          </IconButton>
        </TableCell>
        <TableCell>{details.map((occ) => occ.day).join(",")}</TableCell>
        <TableCell>
          <Chip value={true}></Chip>
        </TableCell>
        <TableCell>
          {/* can display as Radio when changeable */}
          {/* <Radio checked={scheduleStatus} /> */}
          {scheduleStatus ? "Active" : "Inactive"}
        </TableCell>
        <TableCell>Manual</TableCell>
        <TableCell>
          <IconButton aria-label="edit-schedule" onClick={() => goToEdit(id)}>
            <img src={editIcon} alt="edit" />
          </IconButton>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default Row;
