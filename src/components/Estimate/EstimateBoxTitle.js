import React from "react";

import { Grid, Typography } from "@material-ui/core";

const EstimateBoxTitle = () => {
  return (
    <Grid container justify="center">
      <Grid item style={{ marginTop: "1em" }}>
        <Typography variant="h2" align="center">
          Estimate
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EstimateBoxTitle;
