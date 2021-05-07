import React from "react";
import Lottie from "react-lottie";

import { Typography, Grid } from "@material-ui/core";

import { estimateOptions } from "../../data/options";

const EstimateAnimation = (props) => {
  return (
    <Grid
      item
      container
      direction="column"
      lg
      alignItems={props.matchesMD ? "center" : undefined}
    >
      <Grid
        item
        style={{ marginTop: "2em", marginLeft: props.matchesMD ? 0 : "5em" }}
      >
        <Typography variant="h2" align={props.matchesMD ? "center" : undefined}>
          Estimate
        </Typography>
      </Grid>
      <Grid
        item
        style={{
          marginRight: props.matchesMD ? 0 : "10em",
          maxWidth: "50em",
          marginTop: "7.5em",
        }}
      >
        <Lottie options={estimateOptions} height="100%" width="100%" />
      </Grid>
    </Grid>
  );
};

export default EstimateAnimation;
