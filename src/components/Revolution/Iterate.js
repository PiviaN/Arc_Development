import React from "react";

import iterate from "../../assets/iterateIcon.svg";

import { Grid, Typography } from "@material-ui/core";

const Iterate = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesMD ? "column" : "row"}
      justify={props.matchesMD ? "center" : undefined}
      className={props.classes.rowContainer}
      style={{ backgroundColor: "#29ABE2", height: "90em" }}
    >
      <Grid
        item
        container
        direction="column"
        alignItems={props.matchesMD ? "center" : undefined}
        lg
      >
        <Grid item>
          <Typography
            variant="h4"
            align={props.matchesMD ? "center" : undefined}
            gutterBottom
            style={{ color: "#000", marginTop: props.matchesMD ? 0 : "5em" }}
          >
            Iterate
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            The cycle repeats whenever you come up with a new idea for extending
            your current project, or come up with a brand new system entirely.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            By planning for future features and changes we can build and evolve
            your application over time. As new use cases and customer needs
            develop we can respond with continuous integration of new content.
          </Typography>
          <Typography
            variant="body1"
            align={props.matchesMD ? "center" : undefined}
            style={{ color: "#fff", maxWidth: "20em" }}
            paragraph
          >
            Our iterative process will keep you current and competitive,
            allowing you to quickly implement changes instead of waiting months
            for a single update.
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg style={{ alignSelf: "center" }}>
        <img src={iterate} alt="falling dominoes" width="100%" />
      </Grid>
    </Grid>
  );
};

export default Iterate;
