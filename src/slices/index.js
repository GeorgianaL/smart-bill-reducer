import { default as buildings } from "./buildingsSlice";

import { default as entities } from "./entitiesSlice";

import { default as schedules } from "./schedulesSlice";

export { buildings, entities, schedules };

// export { getBuildings, getFloors, getEntities, getSchedules };

export { default as user } from "./loginSlice";

export { default as healthcheck } from "./healthcheckSlice";

export {
  defaultSchedule,
  onCreateEmptySchedule,
  onChangeSchedule,
} from "./schedulesSlice";
