import React from "react";
import { VerbsButton } from "../styleButton.js";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Color from "../../Utils/Color";

function VerbItem({ title, verbs, handleSelectVerb, selectedVerbs }) {
  const useStyles = makeStyles((theme) => ({
    cardheader: {
      background: `${Color.mainNavy}`,
      color: `${Color.mainWhite}`,
      textAlign: "center",
    },
    cardcontent: {
      width: 250,
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      margin: 3,
      height: 250,
      overflow: "auto",
    },
    button: {
      margin: 8,
    },
  }));
  const classes = useStyles();
  return (
    <Card>
      <CardHeader className={classes.cardheader} title={title} />
      <CardContent className={classes.cardcontent}>
        {verbs.map((verb) => {
          return (
            <VerbsButton
              key={verb}
              style={{
                backgroundColor:
                  selectedVerbs === verb
                    ? `${Color.mainYellow}`
                    : `${Color.mainWhiteGrey}`,
              }}
              className={classes.button}
              onClick={() => handleSelectVerb(verb)}
            >
              {verb}
            </VerbsButton>
          );
        })}
      </CardContent>
    </Card>
  );
}
export default VerbItem;
