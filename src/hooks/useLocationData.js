import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBuildings, getFloors, getAllZones } from "../actions";

const useLocationData = () => {
  const dispatch = useDispatch();

  const {
    buildings: {
      buildings,
      loading: loadingBuildings,
      error: errorBuildings,
      floors,
    },
    entities: { zones, loading: loadingZones, error: errorZones },
  } = useSelector((state) => state);

  const [data, setData] = useState({
    buildings,
    floors,
    zones,
  });

  useEffect(() => {
    const fetchData = async () => {
      const newData = data;
      if (newData.buildings.length === 0 && !loadingBuildings) {
        const fetchedBuildings = await dispatch(getBuildings());
        newData.buildings = fetchedBuildings.payload;
      }

      if (newData.floors.length === 0 && !loadingBuildings) {
        const fetchedFloors = await dispatch(getFloors());
        newData.floors = fetchedFloors.payload;
      }

      // if (newData.zones.length === 0 && !loadingZones) {
      const fetchedZones = await dispatch(getAllZones());
      newData.zones = fetchedZones.payload;
      // }
      setData(newData);
    };

    fetchData();
  }, []);

  const location = data;
  const error = errorBuildings || errorZones;
  const loading = loadingBuildings || loadingZones;

  return { location, error, loading };
};

export default useLocationData;
