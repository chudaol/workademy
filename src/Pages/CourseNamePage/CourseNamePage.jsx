import React, { useState } from "react";
import "./CourseNamePage.scss";

//Redux
import { connect } from "react-redux";

// importing styled components for page setup
import { RightSection, ButtonsContainer, TextHeader } from "../StylePages";
import CourseName from "../../Components/Input/CourseName";
import CourseDescription from "../../Components/Input/CourseDescription";
import styled from "styled-components";
import { useEffect } from "react";
import { NavigationButton } from "../../Components/styleButton";

const SmallParagraph = styled.p`
  color: red;
  font-size: 8px;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;

function CourseNamePage({ courseName, courseDescription, nextStep, dispatch }) {
  //info from redux
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  function showErrorMessage() {
    if (isErrorVisible) {
      return <SmallParagraph>Please fill all the fields</SmallParagraph>;
    }
  }
  function goToNextStep() {
    if (courseName && courseDescription) {
      nextStep();
    } else {
      setIsErrorVisible(true);
    }
  }
  useEffect(() => {
    if (courseName && courseDescription) {
      setIsErrorVisible(false);
    }
  }, [courseName, courseDescription]);

  //redux info
  function saveCourseData(courseName, courseDescription) {
    dispatch({
      type: "CREATE_DESCRIPTION",
      courseName: courseName,
      courseDescription: courseDescription,
    });
  }

  // localstorage for username
  let userObject = localStorage.getItem("user");
  let userName = (userObject && userObject.name) || "Admin";

  return (
    <RightSection>
      <TextHeader>
        Hey {userName}! 👋
        <br />
        What's the name of your course?
      </TextHeader>

      <CourseName
        onChange={(event) =>
          saveCourseData(event.target.value, courseDescription)
        }
        value={courseName}
      />
      <CourseDescription
        onChange={(event) => saveCourseData(courseName, event.target.value)}
        value={courseDescription}
      />
      {showErrorMessage()}

      <ButtonsContainer style={{ float: "right" }}>
        <NavigationButton onClick={goToNextStep}>Next Step</NavigationButton>
      </ButtonsContainer>
    </RightSection>
  );
}

function mapStateToProps(state) {
  return {
    courseName: state.course.courseName,
    courseDescription: state.course.courseDescription,
  };
}

export default connect(mapStateToProps)(CourseNamePage);
