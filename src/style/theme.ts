export interface Theme {
  bgColor: string;
  fontColor: string;
}
interface ThemeGroup {
  light: Theme;
  dark: Theme;
}

export const light: Theme = {
  bgColor: "#fff",
  fontColor: "black",
};

export const dark: Theme = {
  bgColor: "#000",
  fontColor: "white",
};

const mode: ThemeGroup = {
  light,
  dark,
};

export default mode;
