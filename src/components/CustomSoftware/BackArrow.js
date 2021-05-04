import React from "react";
import { Link } from "react-router-dom";

import { Grid, IconButton, Hidden } from "@material-ui/core";

import backArrow from "../../assets/backArrow.svg";

const BackArrow = (props) => {
  return (
    <Hidden mdDown>
      <Grid
        item
        className={props.classes.arrowContainer}
        style={{ marginRight: "1em", marginLeft: "-3.5em" }}
      >
        <IconButton
          style={{ backgroundColor: "transparent" }}
          component={Link}
          to="/services"
          onClick={() => props.setSelectedIndex(0)} // p p
        >
          <img src={backArrow} alt="Back to Services Page" />
        </IconButton>
      </Grid>
    </Hidden>
  );
};

export default BackArrow;
