import styled from "styled-components";
import Color from "../Utils/Color";


const Button = styled.button`
  cursor: pointer;
  font-family: sans-serif;
  text-align: center;
  text-decoration: none;
  border: none;

  &:focus {
    outline: none;
  }
`;

const VerbsButton = styled(Button)`
  color: ${Color.mainNavy};
  background: ${Color.mainWhiteGrey};
  font-size: 0.9em;
  padding: 0.5em 1em;
  border-radius: 25px;
`;

const NavigationButton = styled(Button)`
  background: ${({ theme }) => theme.NavButtonBody};
  color: ${({ theme }) => theme.ButtonText};
  font-size: 0.9em;
  padding: 0.7em 0.7em;
  border-radius: 25px;
  @media (max-width: 800px) {
    font-size: 0.7em;
    padding: 0.5em 0.5em;
  }
`;

const SignButton = styled(Button)`
  background: ${({ theme }) => theme.ButtonBody};
  color: ${({ theme }) => theme.ButtonText};
  font-size: 3em;
  padding: 0.01em 0.8em 0.08em 0.8em;
  border-radius: 14px;
  @media (max-width: 800px) {
    font-size: 2em;
  }
`;

const YellowButton = styled(Button)`
  color: ${Color.mainNavy};
  background: ${Color.mainYellow};
  font-size: 1.6em;
  padding: 0.4em 1.5em;
  border-radius: 7px;
`;

const SaveButton = styled(Button)`
  color: ${Color.mainNavy};
  background: ${Color.mainYellow};
  border-radius: 7px;
  font-size: 0.9em;
  padding: 0.7em 0.7em;
  @media (max-width: 800px) {
    font-size: 0.8em;
  }
`;

const ContentButton = styled(VerbsButton)`
  font-size: 1.2em;
  border-radius: 1px;
  margin-left: 3%;
  //padding: 0.8em 0.8em;
  padding: 0.8em 2em;
  @media (max-width: 800px) {
    font-size: 0.8em;
    //padding: 0.6em 0.6em;
    padding: 0.6em 1em;
  }
`;

export {
  Button,
  VerbsButton,
  NavigationButton,
  SignButton,
  YellowButton,
  SaveButton,
  ContentButton,
};
