import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchedules } from "../actions";
import useBuildings from "./useBuildings";

const useSchedules = () => {
  const { buildings, loading: loadingBuildings } = useBuildings();
  const dispatch = useDispatch();

  const {
    schedules,
    loading: loadingSchedules,
    error,
  } = useSelector((state) => state.schedules);
  const [data, setData] = useState(schedules);

  const fetchData = useCallback(async () => {
    const data = await dispatch(getSchedules());

    setData(data.payload);
  }, []);

  const loading = loadingBuildings || loadingSchedules;

  useEffect(() => {
    if (buildings.length !== 0 && schedules.length === 0) {
      fetchData();
    }
  }, [loading, buildings, schedules.length]);

  return { schedules: data, error, loading };
};

export default useSchedules;
