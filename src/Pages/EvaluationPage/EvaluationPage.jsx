import React, { useState } from "react";
import { connect } from "react-redux";
import { MainContent, SmallParagraph, Card, Text, Symbol } from "./style.jsx";
import { NavigationButton } from "../../Components/styleButton";
import { RightSection, ButtonsContainer, BlueTobBar } from "../StylePages";
import QuestionList from "../../Components/EvaluationContainer/QuestionList";
import QuestionTypes from "../../Components/EvaluationContainer/QuestionTypes";
import Answers from "../../Components/EvaluationContainer/Answers";
import PensilWhite from "../../Components/Images/PensilWhite.svg";

function EvaluationPage(props) {
  const [isErrorVisible, setIsErrorVisible] = useState(false); // Check if user filled all the fields if no - show error
  const [questionName, setQuestionName] = useState();
  const [qType, setQType] = useState(); //Three question types are possible: SingleChoice, MultipleChoice, FreeText
  const [answers, setAnswers] = useState(["", "", "", ""]); // Array with 4 answers or nothing for free text.
  const [correctAnswer, setCorrectAnswer] = useState([]); // Array of correct answers starting from 1 or nothing for free text

  // Show error message in case user didn't provide some info.
  function showErrorMessage() {
    if (isErrorVisible) {
      return <SmallParagraph>Some info is missing</SmallParagraph>;
    }
  }

  // Save question and answers that user provided to reducer
  function addQuestion() {
    if (
      !questionName ||
      !qType ||
      (qType !== "FreeText" &&
        (answers.filter((answer) => answer === "").length > 2 ||
          !correctAnswer.length))
    ) {
      setIsErrorVisible(true);
    } else {
      setIsErrorVisible(false);

      props.dispatch({
        type: "CREATE_QUESTION",
        goalId: props.selectedGoal.id,
        name: questionName,
        questionType: qType,
        ...(qType !== "FreeText" && {
          // We add answers and correct answer in case question-type is not a free text
          answers: answers,
          correct: correctAnswer,
        }),
      });
      //Setting all fields to empty after adding submiting question-answer.
      setQuestionName("");
      setQType("");
      setAnswers(["", "", "", ""]);
      setCorrectAnswer([]);
    }
  }
  const deleteQuestion = (question) => {
    props.dispatch({
      type: "DELETE_QUESTION",
      id: question.id,
    });

    // setContents(contents.filter((element) => element !== link));
  };

  if (!props.selectedGoal) {
    return ""; // TODO  redirect to new goal page
  }
  return (
    <RightSection>
      <BlueTobBar>
        Goal: {props.selectedGoal.verb + " " + props.selectedGoal.name}
        <Symbol onClick={props.previousStep}>
          <img src={PensilWhite} alt="edit goal" />
        </Symbol>
      </BlueTobBar>
      <MainContent>
        <Card>
          <QuestionTypes
            qType={qType}
            setQType={setQType}
            setQuestionName={setQuestionName}
            questionName={questionName}
          />
          <Text>Answer Choices</Text>
          <Answers
            qType={qType}
            addQuestion={addQuestion}
            answers={answers}
            setAnswers={setAnswers}
            setCorrectAnswer={setCorrectAnswer}
            correctAnswer={correctAnswer}
          />
          {showErrorMessage()}
        </Card>
        <QuestionList
          questions={props.questions}
          deleteQuestion={deleteQuestion}
        ></QuestionList>
      </MainContent>
      <ButtonsContainer>
        <NavigationButton onClick={props.previousStep}>
          Previous Step
        </NavigationButton>
        <NavigationButton onClick={props.nextStep}>Next Step</NavigationButton>
      </ButtonsContainer>
    </RightSection>
  );
}
function mapStateToProps(state) {
  const { selectedGoal, questions } = state.course;
  return {
    selectedGoal: selectedGoal,
    questions:
      selectedGoal && questions
        ? questions.filter((q) => q.goalId === selectedGoal.id)
        : [],
  };
}
export default connect(mapStateToProps)(EvaluationPage);
