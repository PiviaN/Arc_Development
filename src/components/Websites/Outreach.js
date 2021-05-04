import React from "react";

import outreach from "../../assets/outreach.svg";

import { Grid, Typography } from '@material-ui/core'

const Outreach = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesSM ? "column" : "row"}
      alignItems="center"
      className={props.classes.rowContainer}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography
              align={props.matchesSM ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Outreach
            </Typography>
          </Grid>
          <Grid item>
            <img src={outreach} alt="megaphone" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className={props.classes.paragraphContainer}
        style={{ marginLeft: props.matchesSM ? 0 : "1em" }}
      >
        <Typography align={props.matchesSM ? "center" : undefined} variant="body1">
          Draw people in with a dazzling website. Showing off your products
          online is a great way to help customers decide what’s right for them
          before visiting in person.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Outreach;
