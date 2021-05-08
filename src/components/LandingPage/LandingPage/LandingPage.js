import React from "react";

import useStyles from "./styles";

import { useTheme, Grid, useMediaQuery } from "@material-ui/core";

import CallToAction from "../../../util/CallToAction";
import HeroBlock from "../HeroBlock";
import CustomBlock from "../CustomBlock";
import PhoneBlock from "../PhoneBlock";
import WebsitesBlock from "../WebsitesBlock";
import TRBlock from "../TRBlock";
import InformationBlock from "../InformationBlock";

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <HeroBlock classes={classes} setValue={props.setValue} theme={theme} />
      <CustomBlock
        classes={classes}
        setValue={props.setValue}
        setSelectedIndex={props.setSelectedIndex}
        theme={theme}
        matchesSM={matchesSM}
      />
      <PhoneBlock
        classes={classes}
        setValue={props.setValue}
        theme={theme}
        setSelectedIndex={props.setSelectedIndex}
        matchesSM={matchesSM}
      />
      <WebsitesBlock
        classes={classes}
        setValue={props.setValue}
        theme={theme}
        setSelectedIndex={props.setSelectedIndex}
        matchesSM={matchesSM}
        matchesXS={matchesXS}
      />
      <TRBlock classes={classes} setValue={props.setValue} theme={theme} />
      <InformationBlock
        matchesXS={matchesXS}
        matchesSM={matchesSM}
        classes={classes}
        setValue={props.setValue}
      />
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
