/* eslint-disable no-unused-expressions */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  outline: 0;
}

html, body, #root {
  height: 100%;
}

body{
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  background: #181818;
  font-family: 'Montserrat', san-serif;
  color: #fff;
}

`;

export default GlobalStyle;
