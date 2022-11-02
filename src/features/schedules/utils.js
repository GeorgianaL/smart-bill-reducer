const getNameById = (id, list) => {
  const obj = list.find((item) => item.id === id);
  if (obj && obj.name) return obj.name;
  return "";
};

export const getNamedSchedules = (schedules = [], location = {}) =>
  schedules.map((schedule) => ({
    ...schedule,
    building: getNameById(schedule.buildingId, location.buildings),
    floors: schedule.floors.map((floorId) =>
      getNameById(floorId, location.floors)
    ),
    zones: schedule.zones.map((zoneId) => getNameById(zoneId, location.zones)),
  }));
