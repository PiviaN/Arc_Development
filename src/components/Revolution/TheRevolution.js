import React from "react";

import { Grid, Typography } from "@material-ui/core";

const TheRevolution = (props) => {
  return (
    <Grid
      item
      className={props.classes.rowContainer}
      style={{ marginTop: props.matchesMD ? "1em" : "2em" }}
    >
      <Typography
        align={props.matchesMD ? "center" : undefined}
        variant="h2"
        style={{ fontFamily: "Pacifico" }}
      >
        The Revolution
      </Typography>
    </Grid>
  );
};

export default TheRevolution;
