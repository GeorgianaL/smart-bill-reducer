import styled from "styled-components";

export const Layout = styled.div`
  padding: 30px 50px;

  @media (max-width: 480px) {
    padding: 20px 24px;
  }
`;

export const StyledImage = styled.img`
  position: relative;
  padding-right: 100px;
  height: 400px;

  @media (max-width: 480px) {
    float: left;
    width: auto;
    height: 160px;
  }
`;

export const CentralInfo = styled.div`
  margin-top: 10%;
`;

export const Text = styled.div`
  max-width: 420px;
  margin: 24px 0px;
`;
