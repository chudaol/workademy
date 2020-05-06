import React from "react";
import styled from "styled-components";
import AddNewContentButton from "../AddNewContentButton";

const Container = styled.div`
  display: flex;
`;

function QuestionList({ questions, deleteQuestion }) {
  return (
    <Container>
      <ol>
        <AddNewContentButton
          contents={questions}
          handleDeleteContent={deleteQuestion}
          ContentText={"Question"}
          // Add two epmty props (handleDeleteTextContent and textContents) so I can use the same component as on the content page
          handleDeleteTextContent={() => {}}
          textContents={[]}
          renderContent={(question) => question.name}
          renderType={(question) => question.type}
        />
      </ol>
    </Container>
  );
}

export default QuestionList;
