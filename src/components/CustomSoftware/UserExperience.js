import React from "react";
import Lottie from "react-lottie";

import { Grid, Typography } from "@material-ui/core";

import { uxOptions } from "../../data/options";

const UserExperience = (props) => {
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
          options={uxOptions}
          style={{ maxHeight: 310, maxWidth: 155 }}
        />
      </Grid>
      <Grid item container direction="column" md>
        <Grid item>
          <Typography variant="h4" align={props.matchesSM ? "center" : "right"}>
            User Experience Design
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={props.matchesSM ? "center" : "right"}
            paragraph
          >
            A good design that isn’t usable isn’t a good design.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesSM ? "center" : "right"}
            paragraph
          >
            So why are so many pieces of software complicated, confusing, and
            frustrating?
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesSM ? "center" : "right"}
            paragraph
          >
            By prioritizing users and the real ways they interact with
            technology we’re able to develop unique, personable experiences that
            solve problems rather than create new ones.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserExperience;
