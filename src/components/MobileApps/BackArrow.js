import React from "react";
import { Link } from "react-router-dom";

import { Grid, Hidden, IconButton } from "@material-ui/core";

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
          to="/customsoftware"
          onClick={() => props.setSelectedIndex(1)} // p p
        >
          <img src={backArrow} alt="Back to Custom Software Development Page" />
        </IconButton>
      </Grid>
    </Hidden>
  );
};

export default BackArrow;
