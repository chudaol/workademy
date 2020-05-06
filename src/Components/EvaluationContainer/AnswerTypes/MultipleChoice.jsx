import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import _Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Color from "../../../Utils/Color";

// .MuiCheckbox-colorSecondary.Mui-checked
const Checkbox = styled(_Checkbox)`
  > span {
    color: ${Color.mainNavy};
  }
`;

export default function MultipleChoice({
  setAnswers,
  answers,
  correctAnswer,
  setCorrectAnswer,
}) {
  const handleChange = (event) => {
    console.log(event.target.checked);
    if (event.target.checked) {
      setCorrectAnswer([...correctAnswer, event.target.value]);
    } else {
      setCorrectAnswer(
        correctAnswer.filter((value) => value !== event.target.value)
      );
    }
  };
  const handleAnswerChange = (index, value) => {
    let newAnswers = answers.slice();
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Provide your answers and click on checkbox for all correct ones.
        </FormLabel>
        <FormGroup>
          {answers.map((answer, index) => (
            <FormControlLabel
              key={index}
              control={
                // ["","","",""]
                //[2,3]
                <Checkbox
                  checked={correctAnswer.includes(String(index + 1))}
                  onChange={handleChange}
                  value={String(index + 1)}
                />
              }
              label={
                <TextField
                  value={answer}
                  onChange={(event) =>
                    handleAnswerChange(index, event.target.value)
                  }
                />
              }
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  );
}
