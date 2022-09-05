export const schedulesOverviewData = [
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

export const schedules = {
  zoneId: 1,
  standard: {
    monday: {
      power: true,
      from: "09:00",
      to: "18:00",
    },
    tuesday: {
      power: true,
      from: "08:00",
      to: "17:25",
    },
    wednesday: {
      power: true,
      from: "09:00",
      to: "17:15",
    },
    thursday: {
      power: true,
      from: "07:00",
      to: "17:40",
    },
    friday: {
      power: true,
      from: "09:00",
      to: "16:50",
    },
    saturday: {
      power: false,
    },
    sunday: {
      power: false,
    },
  },
  special: [
    {
      date: "12.10.2022",
      power: true,
      from: "9:00",
      to: "17:00",
    },
    {
      date: "25.12.2022",
      power: false,
    },
    {
      date: "26.12.2022",
      power: false,
    },
    {
      date: "01.01.2023",
      power: true,
      from: "12:00",
      to: "14:00",
    },
  ],
};
