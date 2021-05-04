import React from "react";
import { Link } from "react-router-dom";

import mobileAppsIcon from "../../assets/mobileIcon.svg";

import { Grid, Typography, Button } from "@material-ui/core";

import ButtonArrow from "../../util/ButtonArrow";

const PhoneBlock = (props) => {
  return (
    <Grid item>
      <Grid
        container
        direction="row"
        justify={props.matchesSM ? "center" : "flex-end"}
        className={props.classes.serviceContainer}
      >
        <Grid
          item
          style={{ textAlign: props.matchesSM ? "center" : undefined }}
        >
          <Typography variant="h4">iOS/Android App Development</Typography>
          <Typography variant="subtitle1" className={props.classes.subtitle}>
            Extend Functionality. Extend Access. Increase Engagement.
          </Typography>
          <Typography variant="subtitle1">
            Integrate your web experience or create a standalone app
            {props.matchesSM ? null : <br />} with either mobile platform.
          </Typography>
          <Button
            component={Link}
            to="/mobileapps"
            variant="outlined"
            className={props.classes.learnButton}
            onClick={() => {
              props.setValue(1); // p p
              props.setSelectedIndex(2); // p p
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
            alt="mobile phone icon"
            src={mobileAppsIcon}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PhoneBlock;
