import React from "react";

import { Grid, Typography } from "@material-ui/core";

const Header = (props) => {
  return (
    <Grid item>
      <Typography
        align={props.matchesMD ? "center" : undefined}
        variant="h2"
        style={{ lineHeight: 1 }}
      >
        Contact Us
      </Typography>
      <Typography
        align={props.matchesMD ? "center" : undefined}
        variant="body1"
        style={{ color: props.theme.palette.common.blue }}
      >
        We're waiting.
      </Typography>
    </Grid>
  );
};

export default Header;
