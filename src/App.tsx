import { Global, ThemeProvider } from "@emotion/react";
import Router from "./router/Rotuer";
import GlobalStyle from "./style/GlobalStyle";
import useTheme from "./style/useTheme";
import { default as THEME } from "./style/theme";

const App = () => {
  const [theme, onToggle] = useTheme();
  return (
    <ThemeProvider theme={THEME[theme]}>
      <Global styles={GlobalStyle(THEME[theme])} />
      <Router />
    </ThemeProvider>
  );
};

export default App;
