import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: "#fefefefe",
    blue: {
      "100": "#2a4885",
    },
    yellow: "#f2db57",
  },
  fonts: {
    heading: "Open Sans, Montserrat",
    body: "Open Sans, Montserrat",
    mono: "Open Sans, Montserrat",
  },
  styles: {
    global: {
      "a:hover": {
        textDecoration: "none !important",
      },
    },
  },
});
