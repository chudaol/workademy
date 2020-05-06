import React from "react";
import styled from "styled-components";
import { ReactComponent as SunIcon } from "../Images/SunIcon.svg";
import { ReactComponent as MoonIcon } from "../Images/MoonIcon.svg";
import { Device } from "../../Utils/Device";

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #006fb9;
  border: 1.8px solid ${({ theme }) => theme.toggleBorder};
  justify-content: space-between;
  border-radius: 10px;
  padding: 0.2rem;
  cursor: pointer;
  margin: 0 auto;
  font-size: 0.5rem;
  padding: 0.2rem;
  position: relative;
  position: absolute;
  right: 0;
  z-index: 2;
  width: 3rem;
  height: 1.5rem;
  &:focus {
    outline: none;
  }

  @media ${Device.tablet} {
    width: 4rem;
    height: 1.8rem;
    padding: 0.3rem;
    border-radius: 15px;
  }

  svg {
    height: auto;
    width: 1.5rem;
    transition: all 0.3s linear;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <div>
      <ToggleContainer onClick={toggleTheme}>
        <MoonIcon />
        <SunIcon />
      </ToggleContainer>
    </div>
  );
};

export default Toggle;
