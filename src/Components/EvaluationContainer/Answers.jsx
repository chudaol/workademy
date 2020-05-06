import React from "react";
import styled from "styled-components";
import Color from "../../Utils/Color";
import SingleChoice from "./AnswerTypes/SingleChoice";
import MultipleChoice from "./AnswerTypes/MultipleChoice";
import { SaveButton } from "../styleButton";

const Container = styled.div`
  width: 90%;
  padding-left: 5%;
`;
const Text = styled.div`
  font-size: 20px;
  color: ${Color.mainNavy};
  text-align: center;
`;

const ButtonField = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10%;
  padding-top: 5px;
  margin: 10px;
`;

function Answers({
  qType,
  addQuestion,
  answers,
  setAnswers,
  setCorrectAnswer,
  correctAnswer,
}) {
  return (
    <Container>
      {(qType === "SingleChoice" && (
        <SingleChoice
          setAnswers={setAnswers}
          answers={answers}
          setCorrectAnswer={setCorrectAnswer}
          correctAnswer={correctAnswer}
        />
      )) ||
        (qType === "MultipleChoice" && (
          <MultipleChoice
            setAnswers={setAnswers}
            answers={answers}
            setCorrectAnswer={setCorrectAnswer}
            correctAnswer={correctAnswer}
          />
        )) ||
        (qType === "FreeText" && (
          <Text>We will ask user to submit a free form answer</Text>
        )) || <Text>Choose the question type</Text>}

      {qType && (
        <ButtonField>
          <SaveButton type="submit" onClick={addQuestion}>
            Save
          </SaveButton>
        </ButtonField>
      )}
    </Container>
  );
}

export default Answers;
