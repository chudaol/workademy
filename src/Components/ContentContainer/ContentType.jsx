import React from "react";
import _Box from "@material-ui/core/Box";
import styled from "styled-components";
import Color from "../../Utils/Color";
import { ContentButton } from "../styleButton";

const Box = styled(_Box)`
  background-color: #c4c4c4;
  padding: 2%;
  margin: 5%;
  display: flex;
  // justify-content: center;
  justify-content: space-evenly;
`;

function ContentType({ types, handleSelectType, selectedType }) {
  return (
    <Box>
      {types.map((type) => {
        return (
          <ContentButton
            key={type}
            style={{
              backgroundColor:
                selectedType === type
                  ? `${Color.mainYellow}`
                  : `${Color.mainWhiteGrey}`,
            }}
            onClick={() => handleSelectType(type)}
          >
            {type}
          </ContentButton>
        );
      })}
    </Box>
  );
}

export default ContentType;
