import React from "react";
import _Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Color from "../../../Utils/Color";

const Radio = styled(_Radio)`
  > span {
    color: ${Color.mainNavy};
  }
`;

export default function SingleChoice({
  setAnswers,
  answers,
  correctAnswer,
  setCorrectAnswer,
}) {
  const handleChange = (event) => {
    setCorrectAnswer([event.target.value]);
  };
  const handleAnswerChange = (index, value) => {
    let newAnswers = answers.slice();
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        Provide your answers and select the correct one
      </FormLabel>
      <RadioGroup value={correctAnswer[0] || ""} onChange={handleChange}>
        {answers.map((answer, index) => (
          <FormControlLabel
            key={index}
            value={String(index + 1)}
            control={<Radio />}
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
      </RadioGroup>
    </FormControl>
  );
}
