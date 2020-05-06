import React, { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";
// importing styled components for page setup
import { RightSection, ButtonsContainer } from "../StylePages";
import ModuleSelect from "../../Components/Select/ModuleSelect";
import "./CourseSummaryPage.scss";
import Lecture from "../../Components/lectureContainer/Lecture";
import {
  ResponsiveYellowButton,
  CenterButtonContainer,
} from "../../Components/ResponsiveYellowButton";
import { NavigationButton } from "../../Components/styleButton";
import Color from "../../Utils/Color";
import createCourseJSON from "../../createCourseJSON";

const LecturesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SummaryBlueTobBar = styled.div`
  height: 70px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.mainNavy};
  color: ${Color.mainWhite};
`;

function CourseSummaryPage(props) {
  const [goalId, setGoalId] = React.useState("");

  useEffect(() => {
    setGoalId(props.goals && props.goals.length ? props.goals[0].id : "");
  }, [props.goals]);

  const handleChange = (event) => {
    setGoalId(event.target.value);
    props.dispatch({
      type: "SELECT_GOAL",
      goal: props.goals.find((goal) => goal.id === event.target.value),
    });
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      return;
    }

    props.dispatch({
      type: "MOVE_QUESTION",
      questionId: +draggableId,
      sourceLectureId: +source.droppableId,
      destinationLectureId: +destination.droppableId,
    });
  };

  const questionsById = React.useMemo(
    () =>
      props.questions
        ? props.questions.reduce((acc, question) => {
            return { ...acc, [question.id]: question };
          }, {})
        : {},
    [props.questions]
  );
  const contentsByQuestionId = React.useMemo(
    () =>
      props.contents
        ? props.contents.reduce((acc, content) => {
            return {
              ...acc,
              [content.questionId]: [
                ...(acc[content.questionId] || []),
                content,
              ],
            };
          }, {})
        : {},
    [props.contents]
  );

  //make JSON
  const publishCourse = () => {
    console.log(JSON.stringify(createCourseJSON(props), null, 2));
  };

  return (
    <RightSection>
      <SummaryBlueTobBar>
        This is how your course can look like
      </SummaryBlueTobBar>

      <ModuleSelect
        handleChange={handleChange}
        goalId={goalId}
        goals={props.goals}
      ></ModuleSelect>
      {/* Drag and drop section where user can move content */}

      <LecturesContainer>
        {/* // onDragStart // onDragUpdate */}
        <DragDropContext onDragEnd={onDragEnd}>
          {props.lectures &&
            props.lectures
              .filter((lecture) => lecture.goalId === goalId)
              .map((lecture, index) => {
                const questions = lecture.questions.map(
                  (qId) => questionsById[qId]
                );
                const contents = lecture.questions.flatMap(
                  (qId) => contentsByQuestionId[qId] || []
                );
                return (
                  <Lecture
                    key={lecture.id}
                    lecture={lecture}
                    index={index}
                    questions={questions}
                    contents={contents}
                  ></Lecture>
                );
              })}
        </DragDropContext>
      </LecturesContainer>

      <CenterButtonContainer>
        <ResponsiveYellowButton onClick={publishCourse}>
          Publish your course
        </ResponsiveYellowButton>
      </CenterButtonContainer>
      <ButtonsContainer>
        <NavigationButton onClick={props.previousStep}>
          Previous Step
        </NavigationButton>
      </ButtonsContainer>
    </RightSection>
  );
}

function mapStateToProps(state) {
  return state.course;
}
export default connect(mapStateToProps)(CourseSummaryPage);
