import React from "react";
import { Link } from "react-router-dom";

import { Grid } from "@material-ui/core";

const GridItems = (props) => {
  return (
    <>
      <Grid item className={props.classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid
            item
            component={Link}
            to="/"
            onClick={() => props.setValue(0)} //props of props
            className={props.classes.link}
          >
            Home
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={props.classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid
            item
            component={Link}
            to="/services"
            onClick={() => {
              props.setValue(1); // p p
              props.setSelectedIndex(0); // p p
            }}
            className={props.classes.link}
          >
            Services
          </Grid>
          <Grid
            item
            component={Link}
            to="/customsoftware"
            onClick={() => {
              props.setValue(1); //p p
              props.setSelectedIndex(1); // p p
            }}
            className={props.classes.link}
          >
            Custom Software Development
          </Grid>
          <Grid
            item
            component={Link}
            to="/mobileapps"
            onClick={() => {
              props.setValue(1); // p p
              props.setSelectedIndex(2); // p p
            }}
            className={props.classes.link}
          >
            iOS/Android App Development
          </Grid>
          <Grid
            item
            component={Link}
            to="/websites"
            onClick={() => {
              props.setValue(1); // p p
              props.setSelectedIndex(3); // p p
            }}
            className={props.classes.link}
          >
            Website Development
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={props.classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid
            item
            component={Link}
            to="/revolution"
            onClick={() => props.setValue(2)} // p p
            className={props.classes.link}
          >
            The Revolution
          </Grid>
          <Grid
            item
            component={Link}
            to="/revolution"
            onClick={() => props.setValue(2)} // p p
            className={props.classes.link}
          >
            Vision
          </Grid>
          <Grid
            item
            component={Link}
            to="/revolution"
            onClick={() => props.setValue(2)}
            className={props.classes.link}
          >
            Technology
          </Grid>
          <Grid
            item
            component={Link}
            to="/revolution"
            onClick={() => props.setValue(2)}
            className={props.classes.link}
          >
            Process
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={props.classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid
            item
            component={Link}
            to="/about"
            className={props.classes.link}
          >
            About Us
          </Grid>
          <Grid
            item
            component={Link}
            to="/about"
            onClick={() => props.setValue(3)}
            className={props.classes.link}
          >
            History
          </Grid>
          <Grid
            item
            component={Link}
            to="/about"
            onClick={() => props.setValue(3)}
            className={props.classes.link}
          >
            Team
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={props.classes.gridItem}>
        <Grid container direction="column" spacing={2}>
          <Grid
            item
            component={Link}
            to="/contact"
            onClick={() => props.setValue(4)}
            className={props.classes.link}
          >
            Contact Us
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GridItems;
