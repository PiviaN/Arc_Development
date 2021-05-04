import React from "react";

import { Grid, Typography } from "@material-ui/core";

import roots from "../../assets/root.svg";

const RootCause = (props) => {
  return (
    <Grid
      item
      container
      direction="row"
      style={{ marginTop: "20em", marginBottom: "20em" }}
      className={props.classes.rowContainer}
    >
      <Grid item container direction="column" alignItems="center">
        <Grid item>
          <img
            src={roots}
            alt="tree with roots extending out"
            height={props.matchesSM ? "300em" : "450em"}
            width={props.matchesSM ? "300em" : "450em"}
          />
        </Grid>
        <Grid item className={props.classes.itemContainer}>
          <Typography variant="h4" align="center" gutterBottom>
            Root-Cause Analysis
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Many problems are merely symptoms of larger, underlying issues.
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            We can help you thoroughly examine all areas of your business to
            develop a holistic plan for the most effective implementation of
            technology.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RootCause;
