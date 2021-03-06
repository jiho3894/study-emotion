import { css } from "@emotion/react";
import { Theme } from "./theme";

const GlobalStyle = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${theme.bgColor};
    width: 100%;
    height: 100%;
  }
  span {
    color: ${theme.fontColor};
  }
  a {
    text-decoration: none;
    color: white;
    &:hover {
    }
  }
`;

export default GlobalStyle;
