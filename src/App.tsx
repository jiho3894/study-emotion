import { Global, ThemeProvider } from "@emotion/react";
import Router from "./router/Rotuer";
import GlobalStyle from "./style/GlobalStyle";
import { dark, light } from "./style/theme";
import { useRecoilValue } from "recoil";
import { themeState } from "./recoil/Darkmode";

const App = () => {
  const theme = useRecoilValue(themeState);
  return (
    <ThemeProvider theme={theme ? dark : light}>
      <Global styles={GlobalStyle(theme ? dark : light)} />
      <Router />
    </ThemeProvider>
  );
};

export default App;
