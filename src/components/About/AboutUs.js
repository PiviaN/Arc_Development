import React from "react";

import { Grid, Typography } from "@material-ui/core";

const AboutUs = (props) => {
  return (
    <>
      <Grid
        item
        className={props.classes.rowContainer}
        style={{ marginTop: props.matchesMD ? "1em" : "2em" }}
      >
        <Typography align={props.matchesMD ? "center" : undefined} variant="h2">
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={props.classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Typography
          variant="h4"
          align="center"
          className={props.classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
    </>
  );
};

export default AboutUs;
