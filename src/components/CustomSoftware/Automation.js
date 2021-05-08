import React from "react";
import Lottie from "react-lottie";

import { Grid, Typography } from "@material-ui/core";

import { automationOptions } from "../../data/options";

const Automation = (props) => {
  return (
    <Grid
      item
      container
      className={props.classes.itemContainer}
      direction={props.matchesSM ? "column" : "row"}
      style={{ marginBottom: props.matchesMD ? "15em" : 0 }}
      md
    >
      <Grid item container direction="column" md>
        <Grid item>
          <Typography variant="h4" align={props.matchesSM ? "center" : undefined}>
            Automation
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            align={props.matchesSM ? "center" : undefined}
          >
            Why waste time when you don’t have to?
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={props.matchesSM ? "center" : undefined}
          >
            We can help you identify processes with time or event based actions
            which can now easily be automated.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={props.matchesSM ? "center" : undefined}
          >
            Increasing efficiency increases profits, leaving you more time to
            focus on your business, not busywork.
          </Typography>
        </Grid>
      </Grid>
      <Grid item md style={{ marginTop: props.matchesSM ? "2em" : null }}>
        <Lottie
          options={automationOptions}
          style={{ maxHeight: 290, maxWidth: 280 }}
        />
      </Grid>
    </Grid>
  );
};

export default Automation;
