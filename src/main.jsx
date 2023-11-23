import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { App } from "./app.jsx";

import { extendTheme } from "@chakra-ui/react";
import { theme as baseTheme } from "@saas-ui/react";

const colors = {
  black: "#010707",
  gray: {
    50: "#fafafa",
    100: "#f1f1f1",
    200: "#e7e7e7",
    300: "#d4d4d4",
    400: "#adadad",
    500: "#7f7f7f",
    600: "#545454",
    700: "#373737",
    800: "#090909",
    900: "#191919",
  },
  red: {
    50: "#fdf5f5",
    100: "#f8d9d9",
    200: "#f2b7b7",
    300: "#eb8b8b",
    400: "#e67070",
    500: "#df4646",
    600: "#cc2424",
    700: "#a51d1d",
    800: "#8c1919",
    900: "#671212",
  },
  orange: {
    50: "#fdfaf6",
    100: "#f9ebdd",
    200: "#f2d3b5",
    300: "#e8b17a",
    400: "#de9143",
    500: "#ca7723",
    600: "#ab651e",
    700: "#885018",
    800: "#6b3f13",
    900: "#58340f",
  },
  yellow: {
    50: "#fefefc",
    100: "#fcf9ec",
    200: "#f5eec7",
    300: "#eee09c",
    400: "#e2cc5c",
    500: "#c1a722",
    600: "#9b851b",
    700: "#786815",
    800: "#5a4e10",
    900: "#4b400d",
  },
  green: {
    50: "#f5fdf9",
    100: "#c7f5de",
    200: "#83e9b7",
    300: "#26d980",
    400: "#21be70",
    500: "#1da360",
    600: "#188750",
    700: "#12693e",
    800: "#0f5633",
    900: "#0c472a",
  },
  teal: {
    50: "#effcfc",
    100: "#b9f3f3",
    200: "#73e7e7",
    300: "#25d2d2",
    400: "#1fb3b3",
    500: "#1b9898",
    600: "#167b7b",
    700: "#116060",
    800: "#0e5050",
    900: "#0c4242",
  },
  cyan: {
    50: "#f3fbfd",
    100: "#cdeff6",
    200: "#b6e8f2",
    300: "#9adfed",
    400: "#43c4de",
    500: "#25b5d2",
    600: "#21a3bd",
    700: "#1b879c",
    800: "#176f81",
    900: "#115664",
  },
  blue: {
    50: "#f1f7fd",
    100: "#cbe0f6",
    200: "#a4c9ef",
    300: "#79b0e8",
    400: "#5098e0",
    500: "#2981d9",
    600: "#206bb8",
    700: "#19528d",
    800: "#144373",
    900: "#10375e",
  },
  purple: {
    50: "#f8f6fd",
    100: "#e4daf9",
    200: "#d1bff4",
    300: "#b497ed",
    400: "#9f7ae8",
    500: "#8454e1",
    600: "#6f38dc",
    700: "#5a23c7",
    800: "#4a1da4",
    900: "#37157a",
  },
  pink: {
    50: "#fdf5f9",
    100: "#f8d8e8",
    200: "#f3b9d6",
    300: "#eb8cbc",
    400: "#e56aa8",
    500: "#dc3689",
    600: "#c32273",
    700: "#a01c5e",
    800: "#7d164a",
    900: "#5d1037",
  },
  primary: {
    50: "#fdf5f5",
    100: "#f8d9d9",
    200: "#f2b7b7",
    300: "#eb8b8b",
    400: "#e67070",
    500: "#df4646",
    600: "#cc2424",
    700: "#a51d1d",
    800: "#8c1919",
    900: "#671212",
  },
};

const fonts = {
  heading: "IM Fell Great Primer SC",
  body: "IM Fell Great Primer",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    colors,
    fonts,
    config,
  },

  baseTheme
);

export default theme;

const rootElement = document.getElementById("app");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
