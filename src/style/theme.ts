export interface Theme {
  bgColor: string;
  fontColor: string;
}
interface ThemeGroup {
  light: Theme;
  dark: Theme;
}

export const light: Theme = {
  bgColor: "#E7EBF2",
  fontColor: "black",
};

export const dark: Theme = {
  bgColor: "#1C2632",
  fontColor: "white",
};

const mode: ThemeGroup = {
  light,
  dark,
};

export default mode;
