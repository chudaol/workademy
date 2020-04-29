import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Color from "../../Utils/Color";
import "./NewGoalPage.scss";
import AddNewGoalButton from "../../Components/AddNewGoalButton";
import { lightTheme, darkTheme } from "../../Utils/Themes/Theme";
import { useDarkMode } from "../../Utils/Themes/UseDarkMode";
// importing styled components for page setup
import { ButtonsContainer, GoalsPage } from "../StylePages";
// import Pencil from "../../Components/Images/PencilBG.svg";
import Pensil from "../../Components/Images/Pensil.svg";
import PensilWhite from "../../Components/Images/PensilWhite.svg";
import GoalsContainer from "../../Components/GoalsContainer";
import {
  ResponsiveYellowButton,
  CenterButtonContainer,
} from "../../Components/ResponsiveYellowButton";
import { ThemeProvider } from "styled-components";

//Styles
const Header = styled.div`
  width: 80%;
  display: flex;
  margin: 5%;
  justify-content: center;
  align-items: center;
  @media (max-width: 510px) {
    font-size: 10px;
    flex-direction: column;
  }
`;

const SmallText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  padding-right: 10px;
  @media (max-width: 650px) {
    font-size: 15px;
  }
`;

const TextHeader = styled.div`
  font-size: 40px;
  // text-align: center;

  font-weight: bold;
  color: ${({ theme }) => theme.text};
  @media (max-width: 650px) {
    font-size: 30px;
  }
`;

const Symbol = styled.span`
  padding: 15px;

  > img {
    width: 25px;
  }
`;

function NewGoalPage(props) {
  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  function createNewGoal() {
    props.dispatch({
      type: "SELECT_GOAL",
      goal: null,
    });
    props.nextStep();
  }
  return (
    <GoalsPage>
      <Header>
        <SmallText>Course name:</SmallText>
        <ThemeProvider theme={themeMode}>
          <TextHeader>
            {props.courseName}
            <Symbol onClick={props.previousStep}>
              <img src={theme === "dark" ? Pensil : PensilWhite} />
            </Symbol>
          </TextHeader>
        </ThemeProvider>
      </Header>
      {props.goals && props.goals.map((goal) => <GoalsContainer goal={goal} />)}
      <ButtonsContainer>
        <AddNewGoalButton onClick={createNewGoal}></AddNewGoalButton>
      </ButtonsContainer>
      {props.goals && (
        <CenterButtonContainer>
          <ResponsiveYellowButton onClick={() => props.goToStep(6)}>
            Summary
          </ResponsiveYellowButton>
        </CenterButtonContainer>
      )}
    </GoalsPage>
  );
}

function mapStateToProps(state) {
  return {
    courseName: state.course.courseName,
    goals: state.course.goals,
    selectedGoal: state.course.selectedGoal,
  };
}

export default connect(mapStateToProps)(NewGoalPage);
