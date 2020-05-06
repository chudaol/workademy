import React, { useState } from "react";
import { connect } from "react-redux";

import VerbContainer from "../../Components/VerbContainer/VerbContainer";
import GoalInput from "../../Components/Input/GoalInput";
import { SmallParagraph } from "./styleDefineGoalPage";
import { NavigationButton } from "../../Components/styleButton";

// importing styled components for page setup
import {
  ButtonsContainer,
  TextHeader,
  TextSmallHeader,
  RightSection,
} from "../StylePages";
import { useEffect } from "react";

function DefineGoalPage(props) {
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  // TODO get values from selected goal if not empty
  const [selectedVerbs, setSelectedVerbs] = useState();
  const [goalName, setGoalName] = useState("");

  useEffect(() => {
    if (props.selectedGoal) {
      setSelectedVerbs(props.selectedGoal.verb);
      setGoalName(props.selectedGoal.name);
    } else {
      setSelectedVerbs("");
      setGoalName("");
    }
  }, [props.selectedGoal]);

  function showErrorMessage() {
    if (isErrorVisible) {
      return <SmallParagraph>Please provide a goal</SmallParagraph>;
    }
  }
  function goToNextStep() {
    if (!goalName || !selectedVerbs) {
      setIsErrorVisible(true);
    } else {
      setIsErrorVisible(false);
      addGoal();
      props.nextStep();
    }
  }

  function handleSelectVerb(verb) {
    setSelectedVerbs(verb);
  }
  function addGoal() {
    if (props.selectedGoal) {
      props.dispatch({
        type: "UPDATE_GOAL",
        verb: selectedVerbs,
        name: goalName,
        id: props.selectedGoal.id,
      });
    } else {
      props.dispatch({
        type: "CREATE_GOAL",
        verb: selectedVerbs,
        name: goalName,
      });
    }
  }

  return (
    <RightSection>
      <TextHeader>Let's define the new goal 🎯</TextHeader>
      <TextSmallHeader>
        Please type here the name of your goal and the type of goal. For
        example: Learn HTML - Define
      </TextSmallHeader>
      <VerbContainer
        handleSelectVerb={handleSelectVerb}
        selectedVerbs={selectedVerbs}
      />

      <TextHeader>Goal</TextHeader>

      <GoalInput
        selectedVerbs={selectedVerbs}
        onChange={(event) => setGoalName(event.target.value)}
        value={goalName}
      />

      {showErrorMessage()}
      <ButtonsContainer>
        <NavigationButton onClick={props.previousStep}>
          Previous Step
        </NavigationButton>

        <NavigationButton onClick={goToNextStep}>Next Step</NavigationButton>
      </ButtonsContainer>
    </RightSection>
  );
}
function mapStateToProps(state) {
  return {
    selectedGoal: state.course.selectedGoal,
  };
}
export default connect(mapStateToProps)(DefineGoalPage);
