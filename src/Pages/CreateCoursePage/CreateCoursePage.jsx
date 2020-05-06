import React from "react";

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
  TextHeaderMobile,
  TextSmallHeaderMobile,
} from "./styleCreateCoursePage";
import { GlobalColor } from "../StylePages";

// Components
import NewClassButton from "../../Components/NewClassButton";
import Toggle from "../../Components/Toggle/Toggle";

// Images
import Logo from "../../Components/Images/Logo.svg";
import WhiteLogo from "../../Components/Images/LogoDark.svg";

// Utils
import { useDarkMode } from "../../Utils/Themes/UseDarkMode";
import { lightTheme, darkTheme } from "../../Utils/Themes/Theme";

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
          <TextHeaderMobile>
            Welcome to the Workademy Course Builder!
          </TextHeaderMobile>
          <TextSmallHeaderMobile>
            Start by clicking on the button below
          </TextSmallHeaderMobile>
          <div className="bottomButtons">
            <NewClassButton onClick={() => history.push("/wizard")} />
          </div>
        </CreateCourseHeader>
      </CreateCourseWrapper>
    </ThemeProvider>
  );
}

export default CreateCoursePage;
