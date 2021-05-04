import React from "react";

import mockup from "../../assets/mockupIcon.svg";

import { Grid, Typography } from "@material-ui/core";

const Mockup = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesMD ? "column" : "row"}
      className={props.classes.rowContainer}
      justify={props.matchesMD ? "center" : undefined}
      style={{ backgroundColor: "#FF7373", height: "90em" }}
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
            Mockup
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            After we settle on the best path forward and decide on a solution to
            pursue, details like the cost and timeline will be finalized.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            Then it’s time for us to start on your minimum viable product.
            That’s just a fancy term for a mockup, which doesn’t include colors,
            images, or any other polished design elements, but captures the
            essential layout structure and functionality.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            This helps us understand and refine the solution itself before
            getting distracted by specifics and looks.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg style={{ alignSelf: "center" }}>
        <img
          src={mockup}
          width="100%"
          alt="basic website design outline"
          style={{ maxWidth: 1000 }}
        />
      </Grid>
    </Grid>
  );
};

export default Mockup;
