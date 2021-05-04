import React from "react";
import { Link } from "react-router-dom";

import ButtonArrow from "../../util/ButtonArrow";
import websitesIcon from "../../assets/websiteIcon.svg";

import { Grid, Typography, Button } from "@material-ui/core";

const Website = (props) => {
  return (
    <Grid item>
      <Grid
        container
        direction="row"
        justify={props.matchesSM ? "center" : "flex-end"}
        className={props.classes.serviceContainer}
        style={{ marginBottom: "10em" }}
      >
        <Grid
          item
          style={{
            textAlign: props.matchesSM ? "center" : undefined,
            width: props.matchesSM ? undefined : "35em",
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
        <Grid item style={{ marginRight: props.matchesSM ? 0 : "5em" }}>
          <img
            className={props.classes.icon}
            alt="website icon"
            src={websitesIcon}
            width="250em"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Website;
