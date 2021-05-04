import React from "react";
import Lottie from "react-lottie";

import useStyles from "./styles";

import { useTheme, Grid, useMediaQuery } from "@material-ui/core";

import { mobileOptions } from "../../data/options";
import CallToAction from "../../util/CallToAction";
import BackArrow from "./BackArrow";
import Header from "./Header";
import ForwardArrow from "./ForwardArrow";
import Integration from "./Integration";
import SimultaneousPlatform from "./SimultaneousPlatform";
import BottomIcons from "./BottomIcons";

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <BackArrow
          classes={classes}
          setSelectedIndex={props.setSelectedIndex}
        />
        <Header classes={classes} matchesMD={matchesMD} />
        <ForwardArrow
          classes={classes}
          setSelectedIndex={props.setSelectedIndex}
        />
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        style={{ marginTop: "15em", marginBottom: "15em" }}
        className={classes.rowContainer}
      >
        <Integration matchesSM={matchesSM} />
        <Grid item md>
          <Lottie options={mobileOptions} style={{ maxWidth: "19em" }} />
        </Grid>
        <SimultaneousPlatform matchesSM={matchesSM} />
      </Grid>
      <BottomIcons
        matchesXS={matchesXS}
        matchesMD={matchesMD}
        classes={classes}
      />
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
