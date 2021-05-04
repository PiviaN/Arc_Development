import React from "react";

import { Grid, Typography } from "@material-ui/core";

const SimultaneousPlatform = (props) => {
  return (
    <Grid item container direction="column" md>
      <Grid item>
        <Typography
          align={props.matchesSM ? "center" : "right"}
          variant="h4"
          gutterBottom
        >
          Simultaneous Platform Support
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          align={props.matchesSM ? "center" : "right"}
          variant="body1"
          paragraph
        >
          Our cutting-edge development process allows us to create apps for
          Iphone, Android, and tablets - all at the same time.
        </Typography>
        <Typography
          align={props.matchesSM ? "center" : "right"}
          variant="body1"
          paragraph
        >
          This significantly reduces costs and creates a more unified brand
          experience across all devices.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SimultaneousPlatform;
