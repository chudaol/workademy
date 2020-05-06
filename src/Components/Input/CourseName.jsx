import React from "react";

// ----- importing TextField from Material ui WITH UNDERSCORE as I will put my own styles to this component
import _TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import styled from "styled-components";

// styles
const TextField = styled(_TextField)`
  > div {
    background-color: #e8e8e8;
  }
  width: 70%;
`;

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        color: "#303030",
        "&$focused": {
          color: "#303030",
        },
      },
    },
    MuiInputLabel: {
      root: {
        color: "#6B6B6B",
        "&$focused": {
          color: "#FCB536",
        },
        fontSize: "16px",
      },
    },
  },
});

const Container = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

function CourseName({ onChange, value }) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TextField
          id="outlined-textarea"
          label="Course Name"
          placeholder=""
          multiline
          variant="outlined"
          value={value}
          onChange={onChange}
        />
      </Container>
    </ThemeProvider>
  );
}

export default CourseName;
