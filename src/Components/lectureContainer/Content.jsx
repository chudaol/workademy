import React from "react";
import styled from "styled-components";
import Color from "../../Utils/Color";

// styles
const Container = styled.div`
  width: 20%;
  background-color: ${Color.mainWhite};
  color: ${Color.mainNavy};
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 2.5%;
`;
const Text = styled.div`
  padding: 3px;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

function Content() {
  return (
    <Container>
      <Text>Content</Text>
    </Container>
  );
}

export default Content;
