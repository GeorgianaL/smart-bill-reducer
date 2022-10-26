import styled from "styled-components";

export default styled.div`
  margin-top: -44px;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const EmptyMapContainer = styled.button`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #97e11b;
  background-color: #eef9db;
  margin: 16px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;

  img {
    margin: 8px;
  }
`;
