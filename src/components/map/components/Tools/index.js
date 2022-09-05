import styled, { css } from "styled-components";
import { Tooltip } from "@mui/material";
import TOOLS from "../../constants";
import theme from "../../../../utils/theme";
import imageIcon from "../../../../assets/image-edit.svg";

const StyledTools = styled.div`
  height: 40px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-item: center;
  border-radius: 40px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: fit-content;
  margin-bottom: 24px;
  padding: 0px 24px;
`;

const StyledTool = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      filter: invert(100%) sepia(1%) saturate(2076%) hue-rotate(58deg)
        brightness(88%) contrast(99%);
    `}
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Tools = ({ activeControl, onSelectControl }) => (
  <StyledTools>
    {Object.values(TOOLS).map((control) => (
      <Tooltip title={control.name} arrow>
        <StyledTool
          key={control.id}
          onClick={() => onSelectControl(control.id)}
          active={activeControl === control.id}
        >
          <Icon src={control.icon}></Icon>
        </StyledTool>
      </Tooltip>
    ))}
    <Tooltip title="Change image" arrow>
      <StyledTool
      // onClick={}
      // active={}
      >
        <img src={imageIcon} alt="Change image" />
      </StyledTool>
    </Tooltip>
  </StyledTools>
);

export default Tools;
