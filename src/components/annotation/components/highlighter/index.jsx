import { Sensor, Rectangle, Relay } from "../selectors";

const Highlighter = ({ annotation }) => {
  const controlType = annotation.data.controlType;

  switch (controlType) {
    case "ZONE":
      return <Rectangle key={annotation.data.name} annotation={annotation} />;
    case "SENSOR":
      return <Sensor key={annotation.data.name} annotation={annotation} />;
    case "RELAY":
      return <Relay key={annotation.data.name} annotation={annotation} />;
    default:
      return null;
  }
};

export default Highlighter;
