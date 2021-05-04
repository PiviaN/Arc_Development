import React from "react";

import consultation from "../../assets/consultationIcon.svg";

import { Grid, Typography } from "@material-ui/core";

const Consultation = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesMD ? "column" : "row"}
      className={props.classes.rowContainer}
      justify={props.matchesMD ? "center" : undefined}
      style={{ backgroundColor: "#B3B3B3", height: "90em" }}
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
            Consultation
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={props.matchesMD ? "center" : undefined}
            variant="body1"
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            Our process begins the moment you realize you need a piece of
            technology for your business. Whether you already have an idea for
            where to start and what to do, or if you just know you want to step
            things up, our initial consultation will help you examine your
            business holistically to find the best solutions.
          </Typography>
          <Typography
            align={props.matchesMD ? "center" : undefined}
            variant="body1"
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            Detailed notes will be taken on your requirements and constraints,
            while taking care to identify other potential areas for
            consideration.
          </Typography>
          <Typography
            align={props.matchesMD ? "center" : undefined}
            variant="body1"
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            Cutting-edge advancements in machine learning like object detection
            and natural language processing allow computers to do things
            previously unimaginable, and our expertise and intuition will help
            usher you into this new future of possibilities.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg style={{ alignSelf: "center" }}>
        <img
          src={consultation}
          alt="handshake"
          width="100%"
          style={{ maxWidth: 700 }}
        />
      </Grid>
    </Grid>
  );
};

export default Consultation;
