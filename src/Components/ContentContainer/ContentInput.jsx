import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Color from "../../Utils/Color";
import styled from "styled-components";
import { SaveButton } from "../styleButton";
import { ErrorMessage } from "../../Pages/StylePages";

const Form = styled.form`
  margin: 5px;
`;
const Text = styled.div`
  display: flex;
  padding: 3px;
  margin-right: 1%;
  font-size: 1.5em;
  align-items: center;
  color: ${Color.mainNavy};
`;
const InputField = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`;
const ButtonField = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10%;
  padding-top: 5px;
`;
function ContentInput({
  selectedType,
  link,
  error,
  handleValueSubmit,
  handleValueChange,
}) {
  return (
    <div>
      <Form onSubmit={handleValueSubmit}>
        <InputField>
          <Text>Link to {selectedType ? selectedType : ""}</Text>
          <TextField
            required
            id="standard-required outlined-basic"
            label="Paste your link here"
            variant="outlined"
            style={{ width: "60%" }}
            onChange={handleValueChange}
            value={link}
          />
        </InputField>
        {/* {error ? <SmallParagraph>{error}</SmallParagraph> : null} */}
        {/* If there is error do something, no Else, just one if  */}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonField>
          <SaveButton type="submit">Save</SaveButton>
        </ButtonField>
      </Form>
    </div>
  );
}

export default ContentInput;
