import React from "react";
import Lottie from "react-lottie";

import { Grid, Typography } from "@material-ui/core";

import { documentsOptions } from "../../data/options";

const DigitalDocuments = (props) => {
  return (
    <Grid
      item
      container
      className={props.classes.itemContainer}
      direction={props.matchesSM ? "column" : "row"}
      style={{ marginBottom: props.matchesMD ? "15em" : 0 }}
      md
    >
      <Grid item container direction="column" md>
        <Grid item>
          <Typography variant="h4" align={props.matchesSM ? "center" : undefined}>
            Digital Documents & Data
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            paragraph
            align={props.matchesSM ? "center" : undefined}
          >
            Reduce Errors. Reduce Waste. Reduce Costs.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={props.matchesSM ? "center" : undefined}
          >
            Billions are spent annually on the purchasing, printing, and
            distribution of paper. On top of the massive environmental impact
            this has, it causes harm to your bottom line as well.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={props.matchesSM ? "center" : undefined}
          >
            By utilizing digital forms and documents you can remove these
            obsolete expenses, accelerate your communication, and help the
            Earth.
          </Typography>
        </Grid>
      </Grid>
      <Grid item md>
        <Lottie
          options={documentsOptions}
          style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
        />
      </Grid>
    </Grid>
  );
};

export default DigitalDocuments;
