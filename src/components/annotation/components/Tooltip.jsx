import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: rgba(97, 97, 97, 0.92);
  color: rgb(255, 255, 255);
  font-size: 11px;
  font-weight: 500;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;

function Tooltip(props) {
  const { geometry } = props.annotation;
  if (!geometry) return null;

  return (
    <Container
      style={{
        position: "absolute",
        left: `${geometry.x}%`,
        top: `${geometry.y + geometry.height}%`,
        ...props.style,
      }}
      className={props.className}
      geometry={geometry}
    >
      {props.annotation.data && props.annotation.data.name}
    </Container>
  );
}

Tooltip.defaultProps = {
  style: {},
  className: "",
};

export default Tooltip;
