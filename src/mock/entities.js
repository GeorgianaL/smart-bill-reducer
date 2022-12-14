export const zones = [
  {
    id: 1,
    name: "Zone 1",
    height: 46.30055902663597,
    width: 23.259810942423375,
    x: 1.260383844170725,
    y: 0.3507618108078483,
  },
  {
    id: 2,
    name: "Zone 2",
    height: 27.00865943220432,
    width: 39.644800916642794,
    x: 26.009739329704956,
    y: 1.0522854324235449,
  },
  {
    id: 3,
    name: "Zone 3",
    height: 51.91274799956154,
    width: 31.624176453738187,
    x: 1.1458034947006588,
    y: 47.528225364463445,
  },
];

export const sensors = [
  {
    id: 11,
    name: "Sensor 1",
    zoneId: 1,
    lastActive: "3 hours ago",
    height: 0,
    width: 0,
    x: 4.325623310303395,
    y: 5.701313256128049,
  },
  {
    id: 12,
    name: "Sensor 2",
    zoneId: 2,
    lastActive: "32 minutes ago",
    height: 0,
    width: 0,
    x: 46.13998197656954,
    y: 4.413919940228168,
  },
  {
    id: 13,
    name: "Sensor 3",
    zoneId: 3,
    lastActive: "2 minutes ago",
    height: 0,
    width: 0,
    x: 29.197957344547916,
    y: 55.54182591453778,
  },
  {
    id: 14,
    name: "Sensor 4",
    zoneId: 3,
    lastActive: "3 minutes ago",
    height: 0,
    width: 0,
    x: 6.007810153199159,
    y: 92.140578752263,
  },
];

export const relays = [
  {
    id: 21,
    zoneIds: [1, 2],
    x: 25.421686746987955,
    y: 27.846131681313928,
    width: 0,
    height: 0,
    name: "Relay 1",
  },
];
