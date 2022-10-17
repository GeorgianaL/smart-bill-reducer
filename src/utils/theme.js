import { createTheme } from "@mui/material/styles";
import DMSans from "../assets/fonts/DMSans-Regular.ttf";

const theme = createTheme({
  palette: {
    primary: {
      light: "#d6f2a7",
      main: "#97E11B  ",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F6638C",
    },
    warning: {
      main: "#FFF200",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    grey: {
      300: "#818181",
      400: "#DFDFE6",
      500: "#F8F8F8",
      800: "#EDEDED",
      900: "#fbfbfb",
    },
  },
  typography: {
    fontFamily: "DMSans",
    h3: {
      fontSize: "2.5rem",
      fontWeight: 900,
      "@media (max-width:1200px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      color: "#818181",
    },
    body1: {
      fontWeight: 600,
    },
    body2: {
      color: "#818181",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'DMSans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('DMSans'), local('DMSans-Regular'), url(${DMSans}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiFormLabel: {
      color: "#000000",
      "&focused": {
        color: "#000000",
      },
    },
    MuiInputBase: {
      "input:-internal-autofill-selected": {
        backgroundColor: "transparent",
      },
    },
    "MuiTypography-subtitle2": {
      fontWeight: 700,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "none",
          padding: "6px 36px",
          fontSize: "1rem",
        },
        outlined: {
          borderWidth: 2,
        },
        outlinedSecondary: {
          borderColor: "#000",
          fontWeight: 600,
        },
        sizeSmall: {
          padding: "2px 24px",
        },
      },
      variants: [
        {
          props: { variant: "underlined" },
          style: {
            width: "fit-content",
            fontWeight: 600,
            paddingLeft: 0,
            "> .label": {
              borderBottom: `1px solid black`,
            },
            "&:hover, &:active": {
              backgroundColor: "transparent",
            },
          },
        },
      ],
    },
  },
});

export default theme;
