import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import Card from "../../../components/card";
import Row from "./TableRow";

import { tableHeadConfig } from "./config";
import { useEffect } from "react";
import { getSchedules } from "../../../actions";
import { useLocationData } from "../../../hooks";
import { getNamedSchedules } from "../../schedules/utils";
import { changeActiveFloor } from "../../../slices/buildingsSlice";

const SchedulesOverviewCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    location,
    loading: loadingLocation,
    error: errorLocation,
  } = useLocationData();

  const { activeBuilding } = useSelector((state) => state.buildings);
  const {
    schedules,
    loading: loadingSchedules,
    error: errorSchedules,
  } = useSelector((state) => state.schedules);

  useEffect(() => {
    dispatch(getSchedules());
  }, [activeBuilding]);

  const loading = loadingLocation || loadingSchedules;
  const error = errorLocation || errorSchedules;

  if (loading || error)
    return (
      <Card title={<Typography variant="body1">Schedules Overview</Typography>}>
        <CircularProgress
          sx={{
            display: "flex",
            margin: "auto",
            minHeight: 164,
            color: "#f8f8f8",
          }}
        />
      </Card>
    );

  const seeMap = (id) => {
    const firstFloorId = schedules.find((schedule) => schedule.id === id)
      .floors[0];
    dispatch(changeActiveFloor(firstFloorId));
    navigate(`/map`);
  };

  const editSchedule = (id) => {
    navigate(`/schedules/edit?schedule=${id}`);
  };
  const namedSchedules = schedules
    ? getNamedSchedules(schedules, location)
    : [];

  return (
    <Card title={<Typography variant="body1">Schedules Overview</Typography>}>
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
            {namedSchedules.map((schedule) => (
              <Row
                key={schedule.id}
                {...schedule}
                goToMap={seeMap}
                goToEdit={editSchedule}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default SchedulesOverviewCard;
