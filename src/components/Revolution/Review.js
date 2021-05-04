import React from "react";

import review from "../../assets/reviewIcon.svg";

import { Grid, Typography } from "@material-ui/core";

const Review = (props) => {
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
            gutterBottom
            align={props.matchesMD ? "center" : undefined}
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
            Before moving any farther we come back to you with our progress.
            This gives you the freedom to discuss any changes you may want or
            any ideas you may have come up with before any heavy lifting has
            been done.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            We give you an interactive demonstration of the mockups, thoroughly
            explaining the thought process that went into each screen and every
            anticipated feature.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            Once you’re completely satisfied with the vision for our solution we
            get down to the nitty gritty, fine-details of design.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg style={{ alignSelf: "center" }}>
        <img src={review} alt="magnifying glass" width="100%" />
      </Grid>
    </Grid>
  );
};

export default Review;
