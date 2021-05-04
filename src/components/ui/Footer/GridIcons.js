import React from "react";

import { Grid } from "@material-ui/core";

import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";

const GridIcons = (props) => {
  return (
    <Grid
      container
      justify="flex-end"
      spacing={2}
      className={props.classes.socialContainer}
    >
      <Grid
        item
        component={"a"}
        href="https://www.facebook.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="facebook logo"
          src={facebook}
          className={props.classes.icon}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        href="https://www.twitter.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="twitter logo" src={twitter} className={props.classes.icon} />
      </Grid>
      <Grid
        item
        component={"a"}
        href="https://www.instagram.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="instagram logo"
          src={instagram}
          className={props.classes.icon}
        />
      </Grid>
    </Grid>
  );
};

export default GridIcons;
