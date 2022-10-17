import { Sensor, Rectangle, Relay } from "../selectors";

const Highlighter = (props) => {
  const {
    annotation: {
      data: { controlType, name },
    },
  } = props;

  switch (controlType) {
    case "ZONE":
      return <Rectangle key={name} {...props} />;
    case "SENSOR":
      return <Sensor key={name} {...props} />;
    case "RELAY":
      return <Relay key={name} {...props} />;
    default:
      return null;
  }
};

export default Highlighter;
