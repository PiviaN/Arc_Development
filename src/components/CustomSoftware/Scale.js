import React from "react";
import Lottie from "react-lottie";

import { Grid, Typography } from "@material-ui/core";

import { scaleOptions } from "../../data/options";

const Scale = (props) => {
  return (
    <Grid
      item
      container
      className={props.classes.itemContainer}
      direction={props.matchesSM ? "column" : "row"}
      md
    >
      <Grid item md>
        <Lottie
          options={scaleOptions}
          style={{ maxHeight: 260, maxWidth: 280 }}
        />
      </Grid>
      <Grid item container direction="column" md>
        <Grid item>
          <Typography variant="h4" align={props.matchesSM ? "center" : "right"}>
            Scale
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={props.matchesSM ? "center" : "right"}
            paragraph
          >
            Whether you’re a large brand, just getting started, or taking off
            right now, our application architecture ensures pain-free growth and
            reliability.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Scale;
