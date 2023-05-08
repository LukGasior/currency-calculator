import { createGlobalStyle } from "styled-components";
import currencyBackground from "./currencyBackground.jpg"


export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: 'Lato', sans-serif;
  word-break: break-word;
  background-image: url("${currencyBackground}");
}
`;