import React from "react";

import seo from "../../assets/seo.svg";

import { Grid, Typography } from "@material-ui/core";

const SearchEngine = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesSM ? "column" : "row"}
      alignItems="center"
      justify="flex-end"
      className={props.classes.rowContainer}
      style={{ marginTop: "15em", marginBottom: "15em" }}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Search Engine
              <br />
              Optimization
            </Typography>
          </Grid>
          <Grid item>
            <img src={seo} alt="website standing on winner's podium" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        style={{ marginLeft: props.matchesSM ? 0 : "1em" }}
        className={props.classes.paragraphContainer}
      >
        <Typography
          align={props.matchesSM ? "center" : undefined}
          variant="body1"
          paragraph
        >
          How often have you ever been to the second page of Google results?
        </Typography>
        <Typography
          align={props.matchesSM ? "center" : undefined}
          variant="body1"
          paragraph
        >
          If you’re like us, probably never.
        </Typography>
        <Typography
          align={props.matchesSM ? "center" : undefined}
          variant="body1"
          paragraph
        >
          Customers don’t go there either, so we make sure your website is
          designed to end up on top.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SearchEngine;
