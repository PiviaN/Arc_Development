import React from "react";

import { Grid, Typography } from "@material-ui/core";

const QuestionsTitles = (props) => {
  return (
    <Grid item>
      <Typography
        align="center"
        variant="h2"
        style={{
          fontWeight: 500,
          fontSize: "2.25rem",
          marginTop: "5em",
          lineHeight: 1.25,
          marginLeft: props.matchesSM ? "1em" : 0,
          marginRight: props.matchesSM ? "1em" : 0,
        }}
      >
        {props.question.title}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        style={{ marginBottom: "2.5em" }}
        gutterBottom
      >
        {props.question.subtitle}
      </Typography>
    </Grid>
  );
};

export default QuestionsTitles;
