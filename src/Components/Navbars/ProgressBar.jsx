import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepButton from "@material-ui/core/StepButton";
import StepContent from "@material-ui/core/StepContent";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  // I modified this theme here that comes originally from Material UI.
  palette: {
    primary: { main: "#253858" },
    secondary: { main: "#FCB536" },
    action: {
      disabledBackground: "#7D8799",
      disabled: "#7D8799",
    },

    text: {
      secondary: "#7D8799",
      disabled: "#7D8799",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f0f0f0",
    padding: "0.2",
    display: "flex",
    flexDirection: "column",
    flexShrink: "1",
    position: "sticky",
    justifyContent: "center",
    minWidth: "50px",
    fontSize: "1em",
    cursor: "pointer",
  },

  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),

    active: {
      color: "#253858",
    },

    completed: {
      color: "#253858",
    },
  },

  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },

  // buttonBase: {
  //   root: {
  //     tabindex: "-1",
  //   },
  // },
}));

function getSteps() {
  return [
    "Course parameters",
    "Goals",
    "New Goal",
    "Evaluation",
    "Content",
    "Summary",
  ];
}

export default function ProgressBar({ currentStep, goToStep }) {
  const classes = useStyles();
  const activeStep = currentStep - 1;
  const steps = getSteps();

  const handleStep = (step) => () => {
    goToStep(step + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          className={classes.root}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel onClick={handleStep(index)}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </ThemeProvider>
  );
}
