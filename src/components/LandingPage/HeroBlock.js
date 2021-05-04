import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import ButtonArrow from "../../util/ButtonArrow";
import { defaultOptions } from "../../data/options";

import { Grid, Typography, Button } from '@material-ui/core'

const HeroBlock = (props) => {
  return (
    <Grid item>
      <Grid container justify="flex-end" alignItems="center" direction="row">
        <Grid sm item className={props.classes.heroTextContainer}>
          <Typography align="center" variant="h2">
            Bringing West Coast Technology
            <br /> to the Midwest
          </Typography>
          <Grid
            container
            justify="center"
            className={props.classes.buttonContainer}
          >
            <Grid item>
              <Button
                component={Link}
                to="/estimate"
                className={props.classes.estimateButton}
                variant="contained"
                onClick={() => props.setValue(5)} // p p
              >
                Free Estimate
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                className={props.classes.learnButtonHero}
                onClick={() => props.setValue(2)} // p p
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={props.theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid sm item className={props.classes.animation}>
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroBlock;
