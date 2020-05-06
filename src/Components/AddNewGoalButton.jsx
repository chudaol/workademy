import React from "react";
import styled from "styled-components";
import { Device } from "../Utils/Device";

const Button = styled.button`
  display: flex;
  flex-shrink: 1;
  justify-self: center;
  font-family: sans-serif;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  padding: 0.7em;
  background: ${({ theme }) => theme.ButtonBody};
  color: ${({ theme }) => theme.ButtonText};
  cursor: pointer;
  font-size: 1em;
  width: 70%;
  margin: 0 auto;
  max-width: 600px;
  font-weight: bold;


  @media ${Device.tablet} {
    padding: 1em 1.5em;
    font-size: 1.5em;
    border-radius: 10px;
    background-image: url("${({ theme }) => theme.Plus}");
  background-position: right 20px top 8px;
  background-size: 9%;
  background-repeat: no-repeat;
    
  }
`;

const AddNewGoalButton = ({ onClick }) => {
  return <Button onClick={onClick}>Add a new goal 🎯</Button>;
};
export default AddNewGoalButton;
