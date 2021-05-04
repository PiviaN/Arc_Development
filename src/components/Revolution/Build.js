import React from "react";

import build from "../../assets/buildIcon.svg";

import { Grid, Typography } from "@material-ui/core";

const Build = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesMD ? "column" : "row"}
      className={props.classes.rowContainer}
      justify={props.matchesMD ? "center" : undefined}
      style={{ backgroundColor: "#FBB03B", height: "90em" }}
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
            align={props.matchesMD ? "center" : undefined}
            variant="h4"
            gutterBottom
            style={{ color: "#000", marginTop: props.matchesMD ? 0 : "5em" }}
          >
            Build
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            Here’s where we get down to business.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            Engineering begins after your approval on the final designs. We
            start by scaffolding out the project on a high level, prioritizing
            some areas over others.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            Each area is then developed in order of importance until ready to be
            connected to the next piece.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            Typically the backend, behind the scenes operations are completed
            first. Once all the services are in place we can then create the
            front end, user side of things.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            Finishing the application doesn’t mean we’re done though, because we
            use extensive testing to guarantee compatibility with all intended
            devices.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            Only after our rigorous examinations will we accept a product as
            finished, then pushing it through the production pipeline. This
            produces an optimized, compressed, consumer version of the code and
            assets ready for deployment.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg style={{ alignSelf: "center" }}>
        <img
          src={build}
          alt="building construction site"
          width="100%"
          style={{ maxWidth: props.matchesMD ? 700 : 1000 }}
        />
      </Grid>
    </Grid>
  );
};

export default Build;
