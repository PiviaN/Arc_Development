import React from "react";

import swiss from "../../assets/swissKnife.svg";
import access from "../../assets/extendAccess.svg";
import engagement from "../../assets/increaseEngagement.svg";

import { Grid, Typography } from "@material-ui/core";

const BottomIcons = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesMD ? "column" : "row"}
      className={props.classes.rowContainer}
      style={{ marginBottom: "15em" }}
    >
      <Grid item container direction="column" alignItems="center" md>
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Extend Functionality
          </Typography>
        </Grid>
        <Grid item>
          <img src={swiss} alt="swiss army knife" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        md
        style={{
          marginTop: props.matchesMD ? "10em" : 0,
          marginBottom: props.matchesMD ? "10em" : 0,
        }}
      >
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Extend Access
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={access}
            alt="tear-one-off sign"
            style={{ maxWidth: props.matchesXS ? "20em" : "28em" }}
          />
        </Grid>
      </Grid>
      <Grid item container direction="column" alignItems="center" md>
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Increase Engagement
          </Typography>
        </Grid>
        <Grid item>
          <img src={engagement} alt="app with notification" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BottomIcons;
