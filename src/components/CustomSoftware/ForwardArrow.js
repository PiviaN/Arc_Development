import React from "react";
import { Link } from "react-router-dom";

import { Grid, Hidden, IconButton } from "@material-ui/core";

import forwardArrow from "../../assets/forwardArrow.svg";

const ForwardArrow = (props) => {
  return (
    <Hidden mdDown>
      <Grid item className={props.classes.arrowContainer}>
        <IconButton
          style={{ backgroundColor: "transparent" }}
          component={Link}
          to="/mobileapps"
          onClick={() => props.setSelectedIndex(2)} // p p
        >
          <img
            src={forwardArrow}
            alt="Forward to iOS/Android App Development Page"
          />
        </IconButton>
      </Grid>
    </Hidden>
  );
};

export default ForwardArrow;
