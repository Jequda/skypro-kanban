import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.bg};
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    width: 100%;
  height: 100%;
  }
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

div,
button,
a {
  font-family: "Roboto", sans-serif;
}
`;