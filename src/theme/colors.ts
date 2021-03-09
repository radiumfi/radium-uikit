import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#2972aa",
  primaryBright: "#2972aa",
  primaryDark: "#2972aa",
  secondary: "#1c1488",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#e9e6e9",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#e9e6e9",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#3fbac5",
  textDisabled: "#BDC2C4",
  textSubtle: "#80b4ba",
  borderColor: "#E9EAEB",
  card: "#dad7da",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e9e6e9",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#e9e6e9",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
