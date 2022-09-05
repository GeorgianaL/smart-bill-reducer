import React, { useState } from "react";
import Annotation from "react-image-annotation";
import Container from "./components/Container";
import Tools from "./components/Tools";
import { Editor, Highlighter, Tooltip } from "../annotation/components";
import TOOLS from "./constants";
import { SENSOR, RELAY } from "../../utils/config";

import img from "./floor4.svg";

const Map = ({ zones, sensors, relays, addEntity }) => {
  const [activeControl, setActiveControl] = useState(null);
  const [annotation, setAnnotation] = useState({});

  const onSelectControl = (control) => {
    if (control === activeControl) {
      setActiveControl(null);
    } else {
      setActiveControl(control);
    }
  };

  const onChange = (currentAnnotation) => {
    setAnnotation(currentAnnotation);
  };

  const onSubmit = (currentAnnotation) => {
    const {
      data: { id, name, zoneId, zoneIds },
      geometry: { x, y, width, height },
    } = currentAnnotation;
    setAnnotation({});

    let newEntity = {
      id: id || Math.random(),
      name,
      x,
      y,
      width,
      height,
      controlType: activeControl,
    };
    if (activeControl === SENSOR) {
      newEntity = {
        ...newEntity,
        zoneId,
      };
    }
    if (activeControl === RELAY) {
      newEntity = {
        ...newEntity,
        zoneIds,
      };
    }

    addEntity({
      entityList: TOOLS[activeControl].listName,
      newEntity,
    });
  };

  const disabled = !activeControl;

  const entities = [...zones, ...sensors, ...relays].reduce(
    (prev, entity) => [
      ...prev,
      {
        data: {
          id: entity.id,
          name: entity.name,
          controlType: entity.controlType,
        },
        geometry: {
          x: entity.x,
          y: entity.y,
          width: entity.width,
          height: entity.height,
          type:
            entity.width === 0 && entity.height === 0 ? "POINT" : "RECTANGLE",
        },
      },
    ],
    []
  );

  return (
    <Container>
      <Tools activeControl={activeControl} onSelectControl={onSelectControl} />
      <Annotation
        src={img}
        alt="map"
        annotations={entities}
        type={disabled ? null : TOOLS[activeControl].type}
        value={annotation}
        onChange={onChange}
        onSubmit={onSubmit}
        renderSelector={disabled ? null : TOOLS[activeControl].selector}
        disableAnnotation={disabled}
        disableEditor={disabled}
        disableSelector={disabled}
        renderEditor={(props) => {
          return (
            <Editor
              {...props}
              type={TOOLS[activeControl].id}
              title={TOOLS[activeControl].name}
              zones={zones}
            />
          );
        }}
        renderHighlight={({ annotation }) => (
          <Highlighter annotation={annotation} />
        )}
        renderContent={Tooltip}
        allowTouch={false}
      />
    </Container>
  );
};

export default Map;
