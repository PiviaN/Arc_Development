import React from "react";

import { Grid, Typography } from "@material-ui/core";

import check from "../../assets/check.svg";

const WebsiteSelections = (props) => {
  return (
    <Grid container direction="column" style={{ marginTop: "14em" }}>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {`You want `}
            {props.category === "Basic"
              ? "a Basic Website."
              : `an ${props.category} Website.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WebsiteSelections;
