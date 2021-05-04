import React from "react";

import { Grid, Typography } from "@material-ui/core";

const Process = (props) => {
  return (
    <Grid
      item
      container
      direction="row"
      justify="center"
      className={props.classes.rowContainer}
    >
      <Grid item>
        <Typography variant="h4" gutterBottom>
          Process
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Process;
