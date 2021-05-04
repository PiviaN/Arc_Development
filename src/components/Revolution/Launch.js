import React from "react";

import launch from "../../assets/launchIcon.svg";

import { Grid, Typography } from "@material-ui/core";

const Launch = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesMD ? "column" : "row"}
      className={props.classes.rowContainer}
      justify={props.matchesMD ? "center" : undefined}
      style={{ backgroundColor: "#C1272D", height: "90em" }}
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
            Launch
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            The moment we’ve all been waiting for.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            When construction comes to a close you’re the first one to know.
            We’ll give our final demonstration to show off your shiny new
            software in the wild so you know exactly how it will look to your
            users.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            When you say the word, we press the button and launch your project
            out to the public. We’re there to ensure everything goes to plan so
            you can start reaping the rewards of your technological investment
            immediately.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg style={{ alignSelf: "center" }}>
        <img src={launch} alt="rocket" style={{ maxWidth: 200 }} width="100%" />
      </Grid>
    </Grid>
  );
};

export default Launch;
