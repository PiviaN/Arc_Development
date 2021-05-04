import React from "react";

import { Grid, Typography } from "@material-ui/core";

import lightbulb from "../../assets/bulb.svg";
import cash from "../../assets/cash.svg";
import stopwatch from "../../assets/stopwatch.svg";

const IconsBlock = (props) => {
  return (
    <Grid
      item
      container
      direction="row"
      justify="center"
      style={{ marginTop: "15em", marginBottom: "20em" }}
      className={props.classes.rowContainer}
    >
      <Grid
        item
        container
        direction="column"
        md
        alignItems="center"
        style={{ maxWidth: "40em" }}
      >
        <Grid item>
          <Typography variant="h4">Save Energy</Typography>
        </Grid>
        <Grid item>
          <img src={lightbulb} alt="lightbulb" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        md
        alignItems="center"
        style={{
          maxWidth: "40em",
          marginTop: props.matchesSM ? "10em" : 0,
          marginBottom: props.matchesSM ? "10em" : 0,
        }}
      >
        <Grid item>
          <Typography variant="h4">Save Time</Typography>
        </Grid>
        <Grid item>
          <img src={stopwatch} alt="stopwatch" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        md
        alignItems="center"
        style={{ maxWidth: "40em" }}
      >
        <Grid item>
          <Typography variant="h4">Save Money</Typography>
        </Grid>
        <Grid item>
          <img src={cash} alt="cash" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IconsBlock;
