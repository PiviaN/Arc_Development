import React from "react";

import { Grid, Typography } from "@material-ui/core";

const Integration = (props) => {
  return (
    <Grid item container direction="column" md>
      <Grid item>
        <Typography
          align={props.matchesSM ? "center" : undefined}
          variant="h4"
          gutterBottom
        >
          Integration
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          align={props.matchesSM ? "center" : undefined}
          variant="body1"
          paragraph
        >
          Our technology enables an innate interconnection between web and
          mobile applications, putting everything you need right in one
          convenient place.
        </Typography>
        <Typography
          align={props.matchesSM ? "center" : undefined}
          variant="body1"
          paragraph
        >
          This allows you to extend your reach, reinvent interactions, and
          develop a stronger relationship with your users than ever before.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Integration;
