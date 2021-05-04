import React from "react";
import { Link } from "react-router-dom";

import websitesIcon from "../../assets/websiteIcon.svg";

import { Grid, Typography, Button } from "@material-ui/core";

import ButtonArrow from "../../util/ButtonArrow";

const WebsitesBlock = (props) => {
  return (
    <Grid item>
      <Grid
        container
        direction="row"
        justify={props.matchesSM ? "center" : undefined}
        className={props.classes.serviceContainer}
      >
        <Grid
          item
          style={{
            marginLeft: props.matchesSM ? 0 : "5em",
            textAlign: props.matchesSM ? "center" : undefined,
          }}
        >
          <Typography variant="h4">Website Development</Typography>
          <Typography variant="subtitle1" className={props.classes.subtitle}>
            Reach More. Discover More. Sell More.
          </Typography>
          <Typography variant="subtitle1">
            Optimize for Search Engines, built for speed.
          </Typography>
          <Button
            component={Link}
            to="/websites"
            variant="outlined"
            className={props.classes.learnButton}
            onClick={() => {
              props.setValue(1); // p p
              props.setSelectedIndex(3); // p p
            }}
          >
            <span style={{ marginRight: 10 }}>Learn More</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={props.theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item>
          <img
            className={props.classes.icon}
            alt="website icon"
            src={websitesIcon}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WebsitesBlock;
