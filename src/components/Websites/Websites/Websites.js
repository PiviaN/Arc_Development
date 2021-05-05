import React from "react";

import { useTheme, Grid, useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";
import WebsiteDev from "../WebsiteDev";
import CallToAction from "../../../util/CallToAction";
import Analytics from "../Analytics";
import Ecommerce from "../Ecommerce";
import Outreach from "../Outreach";
import SearchEngine from "../SearchEngine";

export default function Websites(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <WebsiteDev
        matchesMD={matchesMD}
        matchesXS={matchesXS}
        classes={classes}
        setSelectedIndex={props.setSelectedIndex}
      />
      <Analytics matchesSM={matchesSM} classes={classes} />
      <Ecommerce matchesSM={matchesSM} classes={classes} />
      <Outreach matchesSM={matchesSM} classes={classes} />
      <SearchEngine matchesSM={matchesSM} classes={classes} />
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
