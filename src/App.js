import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import NavigationWizard from "./Pages/Navigation/NavigationWizard";
import { GlobalColor } from "./Pages/StylePages";
import Toggle from "./Components/Toggle/Toggle";
import { useDarkMode } from "./Utils/Themes/UseDarkMode";
import { lightTheme, darkTheme } from "./Utils/Themes/Theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateCoursePage from "./Pages/CreateCoursePage/CreateCoursePage";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }
  return (
    <div>
      <ThemeProvider theme={themeMode}>
        <GlobalColor />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Router>
          <Switch>
            <Route exact path="/">
              <CreateCoursePage />
            </Route>
            <Route path="/wizard">
              <NavigationWizard />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
