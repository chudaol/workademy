import React from "react";

import _Card from "@material-ui/core/Card";
import styled from "styled-components";
import _TextField from "@material-ui/core/TextField";
import _Button from "@material-ui/core/Button";
import _ButtonGroup from "@material-ui/core/ButtonGroup";

import Color from "../../Utils/Color";

const TextField = styled(_TextField)`
  > div {
    background-color: #e8e8e8;
  }
  width: 40%;
`;

const ButtonGroup = styled(_ButtonGroup)`
  width: 20%;
`;
const Button = styled(_Button)`
  height: 100%;
  &.active,
  &:active {
    background-color: ${Color.mainNavy} !important;
    color: white;
  }
  > span {
    font-size: 10px;
  }
`;
const Card = styled(_Card)`
  display: flex;
  padding: 5px;
  justify-content: space-around;
`;

function QuestionTypes({ qType, setQType, setQuestionName, questionName }) {
  return (
    <Card>
      <TextField
        label="Your question here"
        variant="filled"
        multiline
        rows={4}
        value={questionName}
        onChange={(event) => setQuestionName(event.target.value)}
      ></TextField>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button
          onClick={() => setQType("MultipleChoice")}
          className={qType === "MultipleChoice" ? "active" : "not-active"}
        >
          Multiple Choice
        </Button>
        <Button
          onClick={() => setQType("SingleChoice")}
          className={qType === "SingleChoice" ? "active" : "not-active"}
        >
          Single Choice
        </Button>
        <Button
          onClick={() => setQType("FreeText")}
          className={qType === "FreeText" ? "active" : "not-active"}
        >
          Free Text
        </Button>
      </ButtonGroup>
    </Card>
  );
}

export default QuestionTypes;
