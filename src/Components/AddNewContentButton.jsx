import React from "react";
import styled from "styled-components";
import BinYellow from "../Components/Images/BinYellow.svg";

const Li = styled.li`
  color: ${({ theme }) => theme.Buttontext};
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-left: 0.5em;
  margin-right: 0.5em;
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

const ContentList = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 28px;
  text-align: center;
  font-weight: bolder;
  margin-bottom: 0.8em;
`;

const ContentDetails = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 15px;
`;

function AddNewContentButton({
  contents,
  handleDeleteContent,
  ContentText,
  handleDeleteTextContent,
  textContents,
  renderContent,
  renderType,
}) {
  return (
    <div>
      <ContentList>Here is the list of your {ContentText}</ContentList>
      {contents.map((content) => {
        const text = renderContent
          ? renderContent(content).slice(0, 30)
          : content.value.slice(0, 30);
        const type = renderType ? renderType(content) : content.type;
        return (
          <div key={content.id}>
            <ContentTextField>
              <Li>{text}</Li>
              <ContentBin
                onClick={() => handleDeleteContent(content)}
                src={BinYellow}
              />
            </ContentTextField>
            <ContentDetails>{type}</ContentDetails>
          </div>
        );
      })}
      {textContents.map((textContent) => {
        return (
          <div key={textContent.id}>
            <ContentTextField>
              <Li>{textContent.value.slice(0, 30)}</Li>
              <ContentBin
                onClick={() => handleDeleteTextContent(textContent)}
                src={BinYellow}
              />
            </ContentTextField>
            <ContentDetails>Text</ContentDetails>
          </div>
        );
      })}
    </div>
  );
}

export default AddNewContentButton;
