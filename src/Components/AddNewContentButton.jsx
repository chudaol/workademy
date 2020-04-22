import React from "react";
import Color from "../Utils/Color";
import styled from "styled-components";
import { SignButton } from "./styleButton";
import Bin from "./Images/Bin.svg";

const Li = styled.li`
  color: ${Color.mainNavy};
  font-size: 25px;
  text-align: center;
  font-weight: bold;

  margin: 1em 0.5em 1em 0;
`;

const ContentBin = styled.img`
  display: flex;
  align-items: flex-start;
  width: 18px;
  cursor: pointer;
`;

const ContentTextField = styled.div`
  display: flex;
  flex-direction: row;
`;

function AddNewContentButton({
  contents,
  handleDeleteContent,
  handlePlusSubmit,
  ContentText,
  textContents,
  handleDeleteTextContent,
}) {
  return (
    <div>
      {contents.map((content) => {
        return (
          <ContentTextField>
            <Li>{ContentText} </Li>
            <ContentBin
              onClick={() => handleDeleteContent(content)}
              src={Bin}
            />
          </ContentTextField>
        );
      })}
      {textContents.map((textContent) => {
        return (
          <ContentTextField>
            <Li>Content </Li>
            <ContentBin
              onClick={() => handleDeleteTextContent(textContent)}
              src={Bin}
            />
          </ContentTextField>
        );
      })}

      <SignButton onClick={handlePlusSubmit}>+</SignButton>
    </div>
  );
}

export default AddNewContentButton;
