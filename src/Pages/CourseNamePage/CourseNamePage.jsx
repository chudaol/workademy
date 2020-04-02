import React from "react";
import "./CourseNamePage.scss";
import SideBar from "../../Components/Navbars/SideBar";

// importing styled components for page setup
import {
  PageContainer,
  LeftBar,
  RightSection,
  ButtonsContainer
} from "../StylePages";

function CourseNamePage(props) {
  return (
    <PageContainer>
      <LeftBar>
        <SideBar />
      </LeftBar>
      <RightSection>
        <ButtonsContainer>
          <button onClick={props.previousStep}>Previous Step</button>
          <button onClick={props.nextStep}>Next Step</button>
        </ButtonsContainer>
      </RightSection>
    </PageContainer>
  );
}

export default CourseNamePage;
