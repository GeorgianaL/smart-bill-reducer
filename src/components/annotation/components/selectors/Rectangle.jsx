import React from "react";
import styled from "styled-components";
import theme from "../../../../utils/theme";

const Box = styled.div`
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Rectangle = (props) => {
  const { geometry } = props.annotation;

  if (!geometry) return null;

  return (
    <Container className={props.className} style={props.style}>
      <Box
        style={{
          position: "absolute",
          left: `${geometry.x}%`,
          top: `${geometry.y}%`,
          height: `${geometry.height}%`,
          width: `${geometry.width}%`,
          border: `dashed 2px ${theme.palette.primary.main}`,
        }}
      />
    </Container>
  );
};

Rectangle.defaultProps = {
  className: "",
  style: {},
};

export default Rectangle;
