import React from "react";

import { useTheme, Grid, useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";
import CallToAction from "../../../util/CallToAction";
import BackArrow from "../BackArrow";
import CustomBlock from "../CustomBlock";
import ForwardArrow from "../ForwardArrow";
import IconsBlock from "../IconsBlock";
import DigitalDocuments from "../DigitalDocuments";
import Scale from "../Scale";
import RootCause from "../RootCause";
import Automation from "../Automation";
import UserExperience from "../UserExperience";

export default function CustomSoftware(props) {
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
        <CustomBlock classes={classes} matchesMD={matchesMD} />
        <ForwardArrow
          classes={classes}
          setSelectedIndex={props.setSelectedIndex}
        />
      </Grid>
      <IconsBlock classes={classes} matchesSM={matchesSM} />
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justify="space-between"
        className={classes.rowContainer}
      >
        <DigitalDocuments
          classes={classes}
          matchesSM={matchesSM}
          matchesMD={matchesMD}
        />
        <Scale classes={classes} matchesSM={matchesSM} />
      </Grid>
      <RootCause matchesSM={matchesSM} classes={classes} />
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justify="space-between"
        style={{ marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Automation
          matchesSM={matchesSM}
          matchesMD={matchesMD}
          classes={classes}
        />
        <UserExperience classes={classes} matchesSM={matchesSM} />
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
