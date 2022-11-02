import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHealthcheck } from "../actions";

const useHealthcheck = () => {
  const dispatch = useDispatch();

  const { healthcheck, loading, error } = useSelector(
    (state) => state.healthcheck
  );

  const [data, setData] = useState(healthcheck);

  const fetchData = useCallback(async () => {
    const data = await dispatch(getHealthcheck());
    setData(data.payload);
  }, []);

  useEffect(() => {
    if (healthcheck.length === 0) {
      fetchData();
    }
  }, [healthcheck.length]);

  return { healthcheck: data, error, loading };
};

export default useHealthcheck;
