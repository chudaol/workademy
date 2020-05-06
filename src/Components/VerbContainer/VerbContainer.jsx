import React from "react";
import Grid from "@material-ui/core/Grid";
import VerbItem from "./VerbItem";
import skills from "./Verbs";

function VerbContainer({ handleSelectVerb, selectedVerbs }) {
  return (
    <Grid container direction="row" justify="space-evenly">
      {skills.map((skill) => {
        return (
          <VerbItem
            key={skill.title}
            title={skill.title}
            verbs={skill.verbs}
            handleSelectVerb={handleSelectVerb}
            selectedVerbs={selectedVerbs}
          />
        );
      })}
    </Grid>
  );
}

export default VerbContainer;
