import React from "react";

import review from "../../assets/reviewIcon.svg";

import { Grid, Typography } from "@material-ui/core";

const Review2 = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesMD ? "column" : "row"}
      className={props.classes.rowContainer}
      justify={props.matchesMD ? "center" : undefined}
      style={{ backgroundColor: "#39B54A", height: "90em" }}
    >
      <Grid
        item
        container
        direction="column"
        alignItems={props.matchesMD ? "center" : undefined}
        lg
      >
        <Grid item>
          <Typography
            variant="h4"
            align={props.matchesMD ? "center" : undefined}
            gutterBottom
            style={{ color: "#000", marginTop: props.matchesMD ? 0 : "5em" }}
          >
            Review
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            A second round of review is essential to our goal of creating
            exactly what you want, exactly how you want it.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            This time we’ll be going over the finalized designs in another fully
            interactive demonstration. Again this gives you an opportunity to
            tweak things and make sure we get everything right the first time.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg style={{ alignSelf: "center" }}>
        <img src={review} alt="magnifying glass" width="100%" />
      </Grid>
    </Grid>
  );
};

export default Review2;
