import React from "react";
import styled from "styled-components";
import sensorIcon from "../../../../assets/sensor.svg";
import theme from "../../../../utils/theme";

const Circle = styled.div((props) => ({
  borderRadius: "50%",
  boxSizing: "border-box",
  boxShadow:
    "0 0 0 1px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(0, 0, 0, 0.2), 0 5px 4px rgba(0, 0, 0, 0.4)",
  background: theme.palette.primary.main,
  position: "absolute",
  transform: "translate3d(-50%, -50%, 0)",
  cursor: "pointer",
  width: 20,
  height: 20,
  top: `${props.y}%`,
  left: `${props.x}%`,
}));

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Sensor = ({ annotation }) => {
  const { geometry } = annotation;
  if (!geometry) return null;

  return (
    <Circle x={geometry.x} y={geometry.y}>
      <Icon alt="sensor" src={sensorIcon} />
    </Circle>
  );
};

export default Sensor;
