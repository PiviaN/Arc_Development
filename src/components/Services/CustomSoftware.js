import React from "react";
import { Link } from 'react-router-dom'

import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import ButtonArrow from "../../util/ButtonArrow";

import { Grid, Typography, Button } from '@material-ui/core'

const CustomSoftware = (props) => {
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
          <Typography variant="h4">Custom Software Development</Typography>
          <Typography variant="subtitle1" className={props.classes.subtitle}>
            Save Energy. Save Time. Save Money
          </Typography>
          <Typography variant="subtitle1">
            Complete digital solutions, from investigation to{" "}
            <span className={props.classes.specialText}>celebration.</span>
          </Typography>
          <Button
            component={Link}
            to="/customsoftware"
            variant="outlined"
            className={props.classes.learnButton}
            onClick={() => {
              props.setValue(1); // p p
              props.setSelectedIndex(1); // p p
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
            alt="custom software icon"
            src={customSoftwareIcon}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
