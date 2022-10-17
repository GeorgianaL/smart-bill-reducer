import React from "react";
import styled from "styled-components";
import relayIcon from "../../../../assets/relay-white.svg";

const Circle = styled.div((props) => ({
  borderRadius: "50%",
  boxSizing: "border-box",
  // boxShadow:
  //   "0 0 0 1px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(0, 0, 0, 0.2), 0 5px 4px rgba(0, 0, 0, 0.4)",
  background: "#00D2DF",
  position: "absolute",
  transform: "translate3d(-50%, -50%, 0)",
  cursor: "pointer",
  width: 28,
  height: 28,
  top: `${props.y}%`,
  left: `${props.x}%`,
  zIndex: 2,
}));

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 4px;
`;

const Relay = ({ annotation, onClick }) => {
  const { geometry } = annotation;
  if (!geometry) return null;

  return (
    <Circle x={geometry.x} y={geometry.y} onClick={onClick}>
      <Icon alt="sensor" src={relayIcon} />
    </Circle>
  );
};

export default Relay;
