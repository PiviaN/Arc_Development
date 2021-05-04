import React from "react";

import maintain from "../../assets/maintainIcon.svg";

import { Grid, Typography } from "@material-ui/core";

const Maintain = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesMD ? "column" : "row"}
      className={props.classes.rowContainer}
      justify={props.matchesMD ? "center" : undefined}
      style={{ backgroundColor: "#8E45CE", height: "90em" }}
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
            Maintain
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            Our work doesn’t end there.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            After a successful launch we keep in close contact to listen to
            feedback and hear how the project is being received.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            From there on out we make sure your application is kept up to date
            and taking advantage of the best features and practices available.
            When new developments arise or new techniques are discovered in
            future projects, we will implement those advancements in your
            project as part of our routine maintenance.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg style={{ alignSelf: "center" }}>
        <img
          src={maintain}
          width="100%"
          alt="wrench tightening bolts"
          style={{ maxWidth: 500 }}
        />
      </Grid>
    </Grid>
  );
};

export default Maintain;
