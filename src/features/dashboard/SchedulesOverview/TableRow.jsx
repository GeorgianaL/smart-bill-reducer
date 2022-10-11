import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Collapse,
  Box,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Chip from "../../../components/chip";
import Radio from "../../../components/radio";

import eyeIcon from "../../../assets/Eye.svg";
import editIcon from "../../../assets/edit.svg";

const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const navigateToSchedules = () => {
    // TODO: POST login
    navigate("/schedules");
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {/* <TableCell>{open ? <p>up</p> : <p>down</p>}</TableCell> */}
        <TableCell component="th" scope="row">
          {row.area}
        </TableCell>
        <TableCell>
          <Chip value={row.power}></Chip>
        </TableCell>
        <TableCell>
          <Radio checked={row.status} />
        </TableCell>
        <TableCell>
          <img src={eyeIcon} alt="see floor's map" />
        </TableCell>
        <TableCell>{row.schedule}</TableCell>
        <TableCell>{row.occurence}</TableCell>
        <TableCell>{row.type}</TableCell>
        <TableCell>
          <IconButton aria-label="edit-schedule" onClick={navigateToSchedules}>
            <img src={editIcon} alt="edit" />
          </IconButton>
        </TableCell>
      </TableRow>
      {/* <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> */}
    </React.Fragment>
  );
};

export default Row;
