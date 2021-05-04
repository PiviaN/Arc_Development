import React from "react";
import { Link } from "react-router-dom";

import { Hidden, Grid, IconButton } from "@material-ui/core";

import forwardArrow from "../../assets/forwardArrow.svg";

const ForwardArrow = (props) => {
  return (
    <Hidden mdDown>
      <Grid item className={props.classes.arrowContainer}>
        <IconButton
          style={{ backgroundColor: "transparent" }}
          component={Link}
          to="/websites"
          onClick={() => props.setSelectedIndex(3)} // p p
        >
          <img src={forwardArrow} alt="Forward to Website Development Page" />
        </IconButton>
      </Grid>
    </Hidden>
  );
};

export default ForwardArrow;
