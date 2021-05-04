import React from "react";

import history from "../../assets/history.svg";

import { Grid, Typography } from "@material-ui/core";

const History = (props) => {
  return (
    <Grid
      item
      container
      className={props.classes.rowContainer}
      style={{ marginTop: "10em", marginBottom: "10em" }}
      direction={props.matchesMD ? "column" : "row"}
      alignItems={props.matchesMD ? "center" : undefined}
      justify="space-between"
    >
      <Grid item>
        <Grid item container direction="column" lg style={{ maxWidth: "35em" }}>
          <Grid item>
            <Typography
              align={props.matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              History
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={props.matchesMD ? "center" : undefined}
              paragraph
              style={{ fontWeight: 700, fontStyle: "italic" }}
            >
              We're the new kid on the block
            </Typography>
            <Typography
              variant="body1"
              align={props.matchesMD ? "center" : undefined}
              paragraph
            >
              Founded in 2019, we’re ready to get our hands on the world’s
              business problems.
            </Typography>
            <Typography
              variant="body1"
              align={props.matchesMD ? "center" : undefined}
              paragraph
            >
              It all started with one question: Why aren’t all businesses using
              available technology? There are many different answers to that
              question: economic barriers, social barriers, educational
              barriers, and sometimes institutional barriers.
            </Typography>
            <Typography
              variant="body1"
              align={props.matchesMD ? "center" : undefined}
              paragraph
            >
              We aim to be a powerful force in overcoming these obstacles.
              Recent developments in software engineering and computing power,
              compounded by the proliferation of smart phones, has opened up
              infinite worlds of possibility. Things that have always been done
              by hand can now be done digitally and automatically, and
              completely new methods of interaction are created daily. Taking
              full advantage of these advancements is the name of the game.
            </Typography>
            <Typography
              variant="body1"
              align={props.matchesMD ? "center" : undefined}
              paragraph
            >
              All this change can be a lot to keep up with, and that’s where we
              come in.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid item container justify="center" lg>
          <img
            src={history}
            alt="quill pen sitting on top of book"
            style={{ maxHeight: props.matchesMD ? 200 : "22em" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default History;
