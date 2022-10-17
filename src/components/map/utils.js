export const getZoneIdByLocation = (x, y, zones) => {
  let zoneId = null;
  zones.forEach((zone) => {
    if (x <= zone.x + zone.width && y <= zone.y + zone.height) {
      zoneId = zone.id;
    }
  });
  return zoneId;
};

export const getZones = (zoneId, zones) => {
  if (Array.isArray(zoneId)) {
    return zoneId.map((id) => {
      const newZone = zones.find((zone) => zone.id === id);
      return newZone;
    });
  }
  return zones.filter((zone) => zone.id === zoneId);
};

export const getNewEntity = (annotation, zones) => {
  const {
    geometry: { x, y },
  } = annotation;

  const zoneId =
    annotation.selection.zoneId || getZoneIdByLocation(x, y, zones);

  return {
    ...annotation,
    selection: {
      ...annotation.selection,
      zoneId,
    },
  };
};

export const transformNewEntity = (annotation, controlType) => {
  const {
    data: { id, name },
    geometry: { x, y, width, height },
    selection: { zoneId },
  } = annotation;

  let newEntity = {
    id,
    name,
    x,
    y,
    width,
    height,
    controlType,
    zoneId,
  };

  return newEntity;
};
