import React from "react";
import { Link } from "react-router-dom";

import useStyles from "./styles";

import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";

import PhoneBlock from "./PhoneBlock";
import CustomSoftware from "./CustomSoftware";
import Website from "./Website";

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align={matchesSM ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        <PhoneBlock
          matchesSM={matchesSM}
          classes={classes}
          setValue={props.setValue}
          setSelectedIndex={props.setSelectedIndex}
          theme={theme}
        />
      </Grid>
      <CustomSoftware
        matchesSM={matchesSM}
        classes={classes}
        setValue={props.setValue}
        setSelectedIndex={props.setSelectedIndex}
        theme={theme}
      />
      <Website
        matchesSM={matchesSM}
        classes={classes}
        setValue={props.setValue}
        setSelectedIndex={props.setSelectedIndex}
        theme={theme}
      />
    </Grid>
  );
}
