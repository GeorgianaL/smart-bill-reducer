import styled from "styled-components";

export const Layout = styled.div`
  padding: 30px 50px;
`;

export const StyledImage = styled.img`
  position: relative;
  float: right;
  padding-right: 100px;

  @media (max-width: 1200px) {
    float: left;
    width: 380px;
  }
`;

export const CentralInfo = styled.div`
  margin-top: 10%;
`;

export const Text = styled.div`
  max-width: 420px;
  margin: 24px 0px;
`;
