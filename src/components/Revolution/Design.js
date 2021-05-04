import React from "react";

import design from "../../assets/designIcon.svg";

import { Grid, Typography } from "@material-ui/core";

const Design = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesMD ? "column" : "row"}
      className={props.classes.rowContainer}
      justify={props.matchesMD ? "center" : undefined}
      style={{ backgroundColor: "#A67C52", height: "90em" }}
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
            Design
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            Using the mockups and notes taken during the consultation as guides,
            we will start ironing out what the final product will look like.
            This also involves using any brand material like fonts, colors, and
            logos to extend the experience you’re already familiar with.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            No aspect is superfluous, and care will be taken with every
            decision.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg style={{ alignSelf: "center" }}>
        <img
          src={design}
          width="100%"
          alt="paintbrush leaving stroke of paint"
          style={{ maxWidth: 1000 }}
        />
      </Grid>
    </Grid>
  );
};

export default Design;
