import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import "./NewGoalPage.scss";
import AddNewGoalButton from "../../Components/AddNewGoalButton";
// importing styled components for page setup
import { ButtonsContainer, GoalsPage } from "../StylePages";
import GoalsContainer from "../../Components/GoalsContainer";
import {
  ResponsiveYellowButton,
  CenterButtonContainer,
} from "../../Components/ResponsiveYellowButton";

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
  color: ${({ theme }) => theme.InputText};
  padding-right: 10px;
  @media (max-width: 650px) {
    font-size: 15px;
  }
`;

const TextHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 40px;
  text-align: center;
  padding: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  @media (max-width: 650px) {
    font-size: 30px;
  }
`;

const Symbol = styled.span` 
display: flex;
flex-direction: column;
align-content: center;
max-width: 30px; 
  padding: 15px;
  height: 25px;
  background-image: url("${({ theme }) => theme.Pensil}");
  position: relative;
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 10px; 
`;

function NewGoalPage(props) {
  function createNewGoal() {
    props.dispatch({
      type: "SELECT_GOAL",
      goal: null,
    });
    props.nextStep();
  }
  const handleEdit = (goal) => {
    props.dispatch({
      type: "SELECT_GOAL",
      goal: goal,
    });
    props.nextStep();
  };
  const handleDelete = (goal) => {
    window.confirm("Do you really want to delete this goal?") &&
      props.dispatch({
        type: "DELETE_GOAL",
        id: goal.id,
      });
  };
  const handleEvaluation = (goal) => {
    props.dispatch({
      type: "SELECT_GOAL",
      goal: goal,
    });
    props.goToStep(4);
  };

  return (
    <GoalsPage>
      <Header>
        <SmallText>Course name:</SmallText>
        <TextHeader>
          {props.courseName}
          <Symbol onClick={props.previousStep}></Symbol>
        </TextHeader>
      </Header>
      {props.goals &&
        props.goals.map((goal) => (
          <GoalsContainer
            key={goal.id}
            goal={goal}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleEvaluation={handleEvaluation}
          />
        ))}
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
  };
}

export default connect(mapStateToProps)(NewGoalPage);
