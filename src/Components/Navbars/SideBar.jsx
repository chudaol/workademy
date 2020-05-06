import React from "react";
import Logo from "../Images/Logo.svg";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { LeftBar } from "../../Pages/StylePages";

const SideBarContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-shrink: 1;
  flex-direction: column;
  position: fixed;
  max-width: 190px;
  height: 100%;
  background-color: #f0f0f0;
`;

const LogoSmall = styled.img`
  min-width: 60px;
  margin: 0.5em;
  justify-self: flex-start;
  padding: 0;
  max-width: 100%;
`;

const SideBar = ({ currentStep, goToStep }) => (
  <LeftBar>
    <SideBarContainer>
      <LogoSmall src={Logo} />
      <ProgressBar currentStep={currentStep} goToStep={goToStep} />
    </SideBarContainer>
  </LeftBar>
);

export default SideBar;
