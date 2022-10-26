import React, { useState } from "react";
import Annotation from "react-image-annotation";
import Container from "./components/Container";
import EmptyMap from "./components/EmptyMap";
import Tools from "./components/Tools";
import { Editor, Highlighter, Tooltip } from "../annotation/components";
import TOOLS from "./constants";
import { ZONE, SENSOR, RELAY } from "../../utils/config";
import { getNewEntity, transformNewEntity } from "./utils";

const Map = ({
  img,
  zones,
  sensors,
  relays,
  addEntity,
  addNewZone,
  addNewSensor,
  addNewRelay,
  onChangeImage,
  highlightEntity,
}) => {
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

  const onSubmit = () => {
    let newEntity = transformNewEntity(annotation, activeControl);
    setAnnotation({});

    if (activeControl === SENSOR) {
      addNewSensor(newEntity);
    }
    if (activeControl === RELAY) {
      addNewRelay(newEntity);
    }
    if (activeControl === ZONE) {
      addNewZone(newEntity);
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
          active: entity.active,
          powerOn: entity.powerOn,
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

  if (img === null || img === "") {
    return <EmptyMap onUpload={onChangeImage} />;
  }

  return (
    <Container>
      <Tools
        activeControl={activeControl}
        onSelectControl={onSelectControl}
        onChangeImage={onChangeImage}
      />
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
        allowTouch
        renderEditor={({ annotation }) => {
          const customAnnotation = getNewEntity(annotation, zones);

          return (
            <Editor
              annotation={customAnnotation}
              onChange={onChange}
              onSubmit={onSubmit}
              type={TOOLS[activeControl].id}
              title={TOOLS[activeControl].name}
              zones={zones}
            />
          );
        }}
        renderHighlight={({ annotation }) => {
          return (
            <Highlighter
              annotation={annotation}
              onClick={() => highlightEntity(annotation.data.id)}
            />
          );
        }}
        renderContent={Tooltip}
      />
    </Container>
  );
};

export default Map;
