import React from 'react'

import { Grid, IconButton } from '@material-ui/core'

const QuestionsArrows = (props) => {
    return (
        <Grid
        item
        container
        justify="space-between"
        style={{ width: "18em", marginTop: "3em" }}
      >
        <Grid item>
          <IconButton
            disabled={props.backButtonDisabled(props.questions)}
            onClick={() =>
              props.previousQuestion(props.questions, props.setQuestions)
            }
          >
            <img
              src={
                props.backButtonDisabled(props.questions)
                  ? props.backArrowDisabled
                  : props.backArrow
              }
              alt="Previous question"
            />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            disabled={props.forwardButtonDisabled(props.questions)}
            onClick={() =>
              props.nextQuestion(props.questions, props.setQuestions)
            }
          >
            <img
              src={
                props.forwardButtonDisabled(props.questions)
                  ? props.forwardArrowDisabled
                  : props.forwardArrow
              }
              alt="Next question"
            />
          </IconButton>
        </Grid>
      </Grid>
    )
}

export default QuestionsArrows
