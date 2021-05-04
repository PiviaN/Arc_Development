import React from "react";
import { Link } from "react-router-dom";

import { Grid, Typography, Button } from "@material-ui/core";

import ButtonArrow from "../../util/ButtonArrow";

import mobileAppsIcon from "../../assets/mobileIcon.svg";

const PhoneBlock = (props) => {
  return (
    <Grid
      container
      direction="row"
      justify={props.matchesSM ? "center" : "flex-end"}
      className={props.classes.serviceContainer}
      style={{ marginTop: props.matchesSM ? "1em" : "5em" }}
    >
      <Grid
        item
        style={{
          textAlign: props.matchesSM ? "center" : undefined,
          width: props.matchesSM ? undefined : "35em",
        }}
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
          width="250em"
        />
      </Grid>
    </Grid>
  );
};

export default PhoneBlock;
