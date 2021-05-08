import React from "react";

import { Grid, Button } from "@material-ui/core";

import QuestionsArrows from "./QuestionsArrows";
import QuestionsTitles from "./QuestionsTitles";
import OptionsDisplay from "./OptionsDisplay";

const QuestionsBoxes = (props) => {
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      lg
      style={{ marginRight: props.matchesMD ? 0 : "2em", marginBottom: "25em" }}
    >
      {props.questions
        .filter((question) => question.active)
        .map((question, index) => (
          <React.Fragment key={index}>
            <QuestionsTitles question={question} matchesSM={props.matchesSM} />
            <OptionsDisplay
              question={question}
              handleSelect={props.handleSelect}
              questions={props.questions}
              setQuestions={props.setQuestions}
              setService={props.setService}
              setPlatforms={props.setPlatforms}
              setFeatures={props.setFeatures}
              setCustomFeatures={props.setCustomFeatures}
              setUsers={props.setUsers}
              setCategory={props.setCategory}
              matchesSM={props.matchesSM}
              theme={props.theme}
              classes={props.classes}
            />
          </React.Fragment>
        ))}
      <QuestionsArrows
        backButtonDisabled={props.backButtonDisabled}
        questions={props.questions}
        previousQuestion={props.previousQuestion}
        setQuestions={props.setQuestions}
        backArrowDisabled={props.backArrowDisabled}
        backArrow={props.backArrow}
        forwardButtonDisabled={props.forwardButtonDisabled}
        nextQuestion={props.nextQuestion}
        forwardArrowDisabled={props.forwardArrowDisabled}
        forwardArrow={props.forwardArrow}
      />
      <Grid item>
        <Button
          variant="contained"
          disabled={props.estimateDisabled(props.questions)}
          className={props.classes.estimateButton}
          onClick={() => {
            props.setDialogOpen(true);
            props.getTotal(props.questions, props.setUsers, props.setTotal);
            props.getPlatforms(props.questions, props.setPlatforms);
            props.getFeatures(props.questions, props.setFeatures);
            props.getCustomFeatures(props.questions, props.setCustomFeatures);
            props.getCategory(props.questions, props.setCategory);
          }}
        >
          Get Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default QuestionsBoxes;
