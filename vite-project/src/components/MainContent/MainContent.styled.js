import { styled } from "styled-components";

export const Main = styled.main`
  width: 100%;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.bg};
`;