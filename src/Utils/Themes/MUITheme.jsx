import React from "react";
import Color from "../Color";
import { createMuiTheme } from "@material-ui/core/styles";
import "typeface-roboto";
//this theme is created to apply just by material UI components. it defines contains colors and typography. It can of course be extended/modified.
export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: `${Color.mainNavy}`,
      light: `${Color.mainWhite}`,
      dark: `${Color.mainNavy}`,
    },
    secondary: {
      main: `${Color.mainYellow}`,
      light: `${Color.mainWhiteGrey}`,
      dark: `${Color.mainNavy}`,
    },

    text: {
      light: `${Color.mainNavy}`,
      dark: `${Color.mainWhite}`,
    },

    background: { default: `${Color.mainWhite}` },
  },

  status: {
    danger: "orange",
  },

  typography: {
    fontFamily: "roboto, sans-serif",
    fontSize: "1em",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontSize: "3em",
      fontWeight: 400,
    },

    h2: {
      fontSize: "2em",
      fontWeight: 400,
    },

    h3: {
      fontSize: "1.5em",
      fontWeight: 400,
    },

    h4: {
      fontSize: "1em",
      fontWeight: 300,
    },
  },
});
