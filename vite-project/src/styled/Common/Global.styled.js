import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.bg};
  }
`;