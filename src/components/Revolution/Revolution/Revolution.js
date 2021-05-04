import React from "react";

import { useTheme, Grid, Typography, useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";

import CallToAction from "../../../util/CallToAction";
import TheRevolution from "../TheRevolution";
import Vision from "../Vision";
import Technology from "../Technology";
import Process from "../Process";
import Consultation from "../Consultation";
import Mockup from "../Mockup";
import Review from "../Review";
import Design from "../Design";
import Review2 from "../Review2";
import Build from "../Build";
import Launch from "../Launch";
import Maintain from "../Maintain";
import Iterate from "../Iterate";

export default function Revolution(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <TheRevolution matchesMD={matchesMD} classes={classes} />
      <Vision matchesSM={matchesSM} matchesMD={matchesMD} classes={classes} />
      <Technology matchesMD={matchesMD} classes={classes} />
      <Process classes={classes} />
      <Consultation matchesMD={matchesMD} classes={classes} />
      <Mockup matchesMD={matchesMD} classes={classes} />
      <Review matchesMD={matchesMD} classes={classes} />
      <Design matchesMD={matchesMD} classes={classes} />
      <Review2 matchesMD={matchesMD} classes={classes} />
      <Build matchesMD={matchesMD} classes={classes} />
      <Launch matchesMD={matchesMD} classes={classes} />
      <Maintain matchesMD={matchesMD} classes={classes} />
      <Iterate matchesMD={matchesMD} classes={classes} />

      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
