import styled from "styled-components";
import Color from "../../Utils/Color";
import _Card from "@material-ui/core/Card";

export const MainContent = styled.div`
  display: flex;
  margin-top: 5%;
`;

export const SmallParagraph = styled.p`
  color: red;
  font-size: 8px;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;

export const Card = styled(_Card)`
  width: 75%;
  margin-left: 1%;
  border: 5px solid ${Color.mainNavy};
  display: flex;
  flex-direction: column;
`;
export const Text = styled.div`
  color: ${Color.mainNavy};
  font-size: 1.5em;
  text-align: center;
  margin: 10px;
`;

export const Symbol = styled.span`
  padding: 5px;
  margin: 5px;
  display: flex;
  align-content: center;
  > img {
    width: 25px;
  }
`;
