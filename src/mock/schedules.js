const schedules = [
  {
    area: "Floor 1",
    power: true,
    status: true,
    schedule: "8:00AM to 7:00PM",
    occurence: "Weekdays",
    type: "Auto",
  },
  {
    area: "Floor 2",
    power: false,
    status: false,
    schedule: null,
    occurence: null,
    type: null,
  },
  {
    area: "Floor 4",
    power: true,
    status: true,
    schedule: "Custom",
    occurence: "Custom",
    type: "Manual",
  },
  {
    area: "Floor 5",
    power: true,
    status: true,
    schedule: "Custom",
    occurence: "Fridays",
    type: "Manual",
  },
];

export default schedules;
