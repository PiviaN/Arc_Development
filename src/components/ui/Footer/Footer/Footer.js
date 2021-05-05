import React from "react";

import footerAdornment from "../../../assets/Footer Adornment.svg";

import { Grid, Hidden } from "@material-ui/core";

import useStyles from "./styles";

import GridItems from "../GridItems";
import GridIcons from "../GridIcons";

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <GridItems
            classes={classes}
            setValue={props.setValue}
            setSelectedIndex={props.setSelectedIndex}
          />
        </Grid>
      </Hidden>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
      <GridIcons classes={classes} />
    </footer>
  );
}
