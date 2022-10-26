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
  border-radius: 10px;
  cursor: pointer;
  margin: 16px;
  width: calc(100% - 32px);

  img {
    margin: 8px;
  }
`;
