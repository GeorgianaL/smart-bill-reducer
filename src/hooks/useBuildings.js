import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBuildings } from "../actions";

const useBuildings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { buildings, loading, error } = useSelector((state) => state.buildings);

  const [data, setData] = useState(buildings);

  const fetchData = useCallback(async () => {
    const data = await dispatch(getBuildings());
    if (data.payload && data.payload.length === 0) {
      navigate("/onboarding");
    } else {
      setData(data.payload);
    }
  }, []);

  useEffect(() => {
    if (buildings.length === 0) {
      fetchData();
    }
  }, []);

  return { buildings: data, error, loading };
};

export default useBuildings;
