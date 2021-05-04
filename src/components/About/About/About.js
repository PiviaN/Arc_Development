import React from "react";

import { useTheme, Grid, useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";

import CallToAction from "../../../util/CallToAction";
import AboutUs from "../AboutUs";
import History from "../History";
import Team from "../Team";

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column">
      <AboutUs matchesMD={matchesMD} classes={classes} />
      <History matchesMD={matchesMD} classes={classes} />
      <Team matchesMD={matchesMD} classes={classes} />
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
