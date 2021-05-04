import React from "react";

import { Grid, Typography } from "@material-ui/core";

import analytics from "../../assets/analytics.svg";

const Analytics = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesSM ? "column" : "row"}
      alignItems="center"
      className={props.classes.rowContainer}
      style={{ marginTop: "15em" }}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography
              align={props.matchesSM ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Analytics
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={analytics}
              style={{ marginLeft: "-2.75em" }}
              alt="graph with magnifying glass revealing 1's and 0's"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={props.classes.paragraphContainer}>
        <Typography
          align={props.matchesSM ? "center" : undefined}
          variant="body1"
        >
          Knowledge is power, and data is 21st Century gold. Analyzing this data
          can reveal hidden patterns and trends in your business, empowering you
          to make smarter decisions with measurable effects.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Analytics;
