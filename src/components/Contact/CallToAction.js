import React from "react";
import { Link } from "react-router-dom";

import { Grid, Typography, Button } from "@material-ui/core";

import ButtonArrow from "../../util/ButtonArrow";

const CallToAction = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesMD ? "column" : "row"}
      className={props.classes.background}
      alignItems="center"
      justify={props.matchesMD ? "center" : undefined}
      lg={8}
      xl={9}
    >
      <Grid
        item
        style={{
          marginLeft: props.matchesMD ? 0 : "3em",
          textAlign: props.matchesMD ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography align={props.matchesMD ? "center" : undefined} variant="h2">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography
              align={props.matchesMD ? "center" : undefined}
              variant="subtitle2"
              style={{ fontSize: "1.5rem" }}
            >
              Take advantage of the 21st century.
            </Typography>
            <Grid container justify={props.matchesMD ? "center" : undefined} item>
              <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                className={props.classes.learnButton}
                onClick={() => props.setValue(2)}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={props.theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/estimate"
          variant="contained"
          className={props.classes.estimateButton}
          onClick={() => props.setValue(5)} // p p
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
