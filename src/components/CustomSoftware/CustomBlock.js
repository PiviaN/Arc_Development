import React from "react";

import { Typography, Grid } from "@material-ui/core";

const CustomBlock = (props) => {
  return (
    <Grid item container direction="column" className={props.classes.heading}>
      <Grid item>
        <Typography align={props.matchesMD ? "center" : undefined} variant="h2">
          Custom Software Development
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          align={props.matchesMD ? "center" : undefined}
          variant="body1"
          paragraph
        >
          Whether we’re replacing old software or inventing new solutions, Arc
          Development is here to help your business tackle technology.
        </Typography>
        <Typography
          align={props.matchesMD ? "center" : undefined}
          variant="body1"
          paragraph
        >
          Using regular commercial software leaves you with a lot of stuff you
          don’t need, without some of the stuff you do need, and ultimately
          controls the way you work. Without using any software at all you risk
          falling behind competitors and missing out on huge savings from
          increased efficiency.
        </Typography>
        <Typography
          align={props.matchesMD ? "center" : undefined}
          variant="body1"
          paragraph
        >
          Our custom solutions are designed from the ground up with your needs,
          wants, and goals at the core. This collaborative process produces
          finely tuned software that is much more effective at improving your
          workflow and reducing costs than generalized options.
        </Typography>
        <Typography
          align={props.matchesMD ? "center" : undefined}
          variant="body1"
          paragraph
        >
          We create exactly what you what, exactly how you want it.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CustomBlock;
