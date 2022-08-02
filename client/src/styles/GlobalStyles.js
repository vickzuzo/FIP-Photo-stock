import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Finlandica', sans-serif;
  }
  body {
    font-family: 'Finlandica', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
`;

export const lightTheme = {
  background: "#f1f1f1",
  container: "#fff",
  text: "#121620",
  primary: "#FB8500",
  yellow: "#FFC857",
  green: "",
  red: "#EF233C",
  blue: "",
  overlay: "rgba(0, 0, 0, 0.5)",
};
export const darkTheme = {
  background: "#121620",
  container: "#12202b",
  text: "#f1f1f1",
  primary: "#FB8500",
  yellow: "#FFC857",
  green: "",
  red: "#EF233C",
  blue: "",
  overlay: "rgba(18, 32, 43, 0.5)",
};

export const Theme = {
  primary: "#FB8500",
  yellow: "#FFC857",
  green: "",
  red: "#EF233C",
  blue: "",
};
