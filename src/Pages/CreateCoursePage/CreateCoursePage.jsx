import React, { useState } from "react";

// Dependencies
import { useHistory } from "react-router-dom";

// Styled-Components
import { ThemeProvider } from "styled-components";
import {
  LogoBig,
  TopGreyCorner,
  DownGreyCorner,
  CreateCourseWrapper,
  CreateCourseHeader,
} from "./styleCreateCoursePage";
import { GlobalColor, TextHeader, TextSmallHeader } from "../StylePages";

// Components
import NewClassButton from "../../Components/NewClassButton";
import Toggle from "../../Components/Toggle/Toggle";

// Images
import Logo from "../../Components/Images/Logo.svg";
import WhiteLogo from "../../Components/Images/LogoDark.svg";

// Utils
import { useDarkMode } from "../../Utils/Themes/UseDarkMode";
import { lightTheme, darkTheme } from "../../Utils/Themes/Theme";
import { Device } from "../../Utils/Device";

function CreateCoursePage() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const history = useHistory();
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalColor />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <TopGreyCorner />
      <DownGreyCorner />
      <CreateCourseWrapper>
        <LogoBig src={theme === "dark" ? WhiteLogo : Logo} />
        <CreateCourseHeader>
          <TextHeader>
            Welcome to the Workademy Course Builder!
            <TextSmallHeader>
              To start creating your class, click on the button below
            </TextSmallHeader>
          </TextHeader>
          <div className="bottomButtons">
            <NewClassButton onClick={() => history.push("/wizard")} />
          </div>
        </CreateCourseHeader>
      </CreateCourseWrapper>
    </ThemeProvider>
  );
}

export default CreateCoursePage;
