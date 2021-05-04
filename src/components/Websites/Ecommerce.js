import React from "react";

import ecommerce from "../../assets/ecommerce.svg";

import { Grid, Typography } from "@material-ui/core";

const Ecommerce = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesSM ? "column" : "row"}
      alignItems="center"
      justify="flex-end"
      className={props.classes.rowContainer}
      style={{ marginBottom: "15em", marginTop: "15em" }}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              E-Commerce
            </Typography>
          </Grid>
          <Grid item>
            <img src={ecommerce} alt="world outline made of dollar signs" />
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
          It’s no secret that people like to shop online.
        </Typography>
        <Typography
          align={props.matchesSM ? "center" : undefined}
          variant="body1"
          paragraph
        >
          In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for
          your slice of that pie.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Ecommerce;
