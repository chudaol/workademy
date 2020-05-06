import Color from "../Color";
import Pensil from "../../Components/Images/Pensil.svg";
import PensilWhite from "../../Components/Images/PensilWhite.svg";
import Plus from "../../Components/Images/Plus.svg";
import PlusDark from "../../Components/Images/PlusDark.svg";

export const lightTheme = {
  body: `${Color.mainWhite}`,
  text: `${Color.mainNavy}`,
  ButtonBody: `${Color.mainNavy}`,
  ButtonText: `${Color.mainWhite}`,
  NavButtonBody: `${Color.mainNavy}`,
  VerbText: `${Color.mainNavy}`,
  InputText: `${Color.mainNavy}`,
  toggleBorder: `${Color.mainBlue}`,
  HeaderBackground: `${Color.mainNavy}`,
  HeaderText: `${Color.mainWhite}`,
  ModuleSelect: `${Color.mainYellow}`,
  Pensil: `${Pensil}`,
  Plus: `${Plus}`,
};

export const darkTheme = {
  body: `${Color.mainNavy}`,
  text: `${Color.mainWhite}`,
  NavButtonBody: `${Color.mainYellow}`,
  ButtonBody: `${Color.mainWhiteGrey}`,
  ButtonText: `${Color.mainNavy}`,
  VerbText: `${Color.mainWhite}`,
  InputText: `${Color.mainWhite}`,
  toggleBorder: `${Color.mainYellow}`,
  FormHelperText: `${Color.mainWhite}`,
  HeaderBackground: `${Color.mainWhiteGrey}`,
  HeaderText: `${Color.mainNavy}`,
  ModuleSelect: `${Color.mainWhiteGrey}`,
  Pensil: `${PensilWhite}`,
  Plus: `${PlusDark}`,
};
