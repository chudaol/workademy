import styled from "styled-components";
import Color from "../Utils/Color";
import { createGlobalStyle } from "styled-components";

export const GlobalColor = createGlobalStyle`
 *,
  *::after,
  *::before {
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    max-width: 100vw

  }`;

export const PageContainer = styled.div`
  > div {
    flex-direction: row;
    display: flex;
    > div:nth-child(2) {
      flex-grow: 1;
    }
  }
`;

export const LeftBar = styled.div`
  flex-basis: 190px;
  flex-grow: 0;
  flex-shrink: 0;
`;

//I will leave right section here in case we will need to add some theme to it later
export const RightSection = styled.div``;
export const BlueTobBar = styled.div`
  height: 70px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Color.mainNavy};
  color: ${Color.mainWhite};
  border-bottom: 1.8px solid ${Color.mainWhite};
  /* background: ${({ theme }) => theme.HeaderBackground};
  color: ${({ theme }) => theme.HeaderText}; */
  
`;

export const ButtonsContainer = styled.div`
  margin: 5px 10px;
  justify-content: space-between;
  display: flex;
`;

export const GoalsPage = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const Header = styled.div`
  font-size: 30px;
  text-align: center;
  
 
`;

export const TextHeader = styled.div`
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  margin-top: 2em;
  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

export const TextSmallHeader = styled(TextHeader)`
  font-size: 30px;
  margin: 2em 3em;
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const HintMessage = styled.div`
  color: red;
  font-size: 12px;
  display: flex;
  justify-content: center;
  padding-bottom: 0.5em;
`;

export const ErrorMessage = styled(HintMessage)`
  justify-content: flex-end;
  padding-right: 15px;
  
`;
