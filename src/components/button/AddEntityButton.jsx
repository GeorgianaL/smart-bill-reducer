import * as React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import addIcon from "../../assets/add.svg";

const Container = styled.div`
  border: 2px dashed #a5a5a5;
  background-color: white;
  border-radius: 10px;
  padding: 12px 50px;
  display: flex;
  justify-content: center;

  button {
    color: black;
    font-weight: bold;
  }
`;

const AddEntityButton = ({ children, ...props }) => (
  <Container>
    <Button {...props} startIcon={<img src={addIcon} alt="add" />}>
      {children}
    </Button>
  </Container>
);

export default AddEntityButton;
