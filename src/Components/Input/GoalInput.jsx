import React from "react";
//Material UI input field
import _TextField from "@material-ui/core/TextField";

// Styled-components
import styled from "styled-components";

const TextField = styled(_TextField)`
  > div {
    color: "#6B6B6B";
    background-color: #e8e8e8;
  }
`;

const Form = styled.form`
  margin: 5px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.InputText};
`;
const Verb = styled.div`
  display: flex;
  padding: 3px;
  align-items: center;
`;

function GoalInput({ selectedVerbs, value, onChange }) {
  return (
    <Form>
      <Verb>{selectedVerbs ? selectedVerbs : ""}</Verb>
      <TextField
        required
        label="Goal name"
        variant="outlined"
        style={{ width: "50%" }}
        value={value}
        onChange={onChange}
      />
    </Form>
  );
}

export default GoalInput;
