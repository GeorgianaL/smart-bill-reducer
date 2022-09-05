import {
  PointSelector,
  RectangleSelector,
} from "react-image-annotation/lib/selectors";
import subzoneIcon from "../../assets/subzone.svg";
import sensorIcon from "../../assets/sensor.svg";
import relayIcon from "../../assets/relay.svg";
import { Sensor, Rectangle, Relay } from "../annotation/components";
import { ZONE, SENSOR, RELAY } from "../../utils/config";

const TOOLS = {
  ZONE: {
    id: ZONE,
    name: "Add zone",
    icon: subzoneIcon,
    selector: Rectangle,
    type: RectangleSelector.TYPE,
    listName: "zones",
  },
  SENSOR: {
    id: SENSOR,
    name: "Add sensor",
    icon: sensorIcon,
    selector: Sensor,
    type: PointSelector.TYPE,
    listName: "sensors",
  },
  RELAY: {
    id: RELAY,
    name: "Add relay",
    icon: relayIcon,
    selector: Relay,
    type: PointSelector.TYPE,
    listName: "relays",
  },
};

export default TOOLS;
