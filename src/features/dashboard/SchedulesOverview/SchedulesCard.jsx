import React from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Card from "../../../components/card";
import Row from "./TableRow";

import { tableHeadConfig } from "./config";
import schedules from "../../../mock/schedules";

const SchedulesOverviewCard = () => (
  <Card title={<Typography variant="body1">Scheduls Overview</Typography>}>
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {tableHeadConfig.map((item) => (
              <TableCell key={item} sx={{ textTransform: "uppercase" }}>
                <Typography variant="body1" sx={{ fontSize: 14 }}>
                  {item}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {schedules.map((row) => (
            <Row key={row.area} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
);

export default SchedulesOverviewCard;
