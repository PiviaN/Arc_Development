import React from "react";
import { Link } from 'react-router-dom'

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";

import { Grid, IconButton, Hidden, Typography } from "@material-ui/core";

const WebsiteDev = (props) => {
  return (
    <Grid
      item
      container
      direction="row"
      justify={props.matchesMD ? "center" : undefined}
      className={props.classes.rowContainer}
      style={{ marginTop: props.matchesXS ? "1em" : "2em" }}
    >
      <Hidden mdDown>
        <Grid
          item
          className={props.classes.arrowContainer}
          style={{ marginRight: "1em", marginLeft: "-3.5em" }}
        >
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/mobileapps"
            onClick={() => props.setSelectedIndex(2)} // p p
          >
            <img
              src={backArrow}
              alt="Back to iOS/Android App Development Page"
            />
          </IconButton>
        </Grid>
      </Hidden>
      <Grid item container direction="column" className={props.classes.heading}>
        <Grid item>
          <Typography align={props.matchesMD ? "center" : undefined} variant="h2">
            Website Development
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={props.matchesMD ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Having a website is a necessity in today's business world. They give
            you one central, public location to let people know who you are,
            what you do, and why you're the best at it.
          </Typography>
          <Typography
            align={props.matchesMD ? "center" : undefined}
            variant="body1"
            paragraph
          >
            From simply having your hours posted to having a full fledged online
            store, making yourself as accessible as possible to users online
            drives growth and enables you to reach new customers.
          </Typography>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Grid item className={props.classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/services"
            onClick={() => props.setSelectedIndex(0)} // p p
          >
            <img src={forwardArrow} alt="Forward to Services Page" />
          </IconButton>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default WebsiteDev;
