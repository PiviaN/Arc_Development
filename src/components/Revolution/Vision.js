import React from "react";

import { Grid, Typography } from "@material-ui/core";

import vision from "../../assets/vision.svg";

const Vision = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesMD ? "column" : "row"}
      alignItems="center"
      className={props.classes.rowContainer}
      style={{ marginTop: "5em" }}
    >
      <Grid item lg>
        <img
          src={vision}
          alt="mountain through binoculars"
          style={{
            maxWidth: props.matchesSM ? 300 : "40em",
            marginRight: props.matchesMD ? 0 : "5em",
            marginBottom: props.matchesMD ? "5em" : 0,
          }}
        />
      </Grid>
      <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
        <Grid item>
          <Typography
            align={props.matchesMD ? "center" : "right"}
            variant="h4"
            gutterBottom
          >
            Vision
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={props.matchesMD ? "center" : "right"}
            variant="body1"
            paragraph
          >
            The rise of computers, and subsequently the Internet, has completely
            altered every aspect of human life. This has increased our comfort,
            broadened our connections, and reshaped how we view the world.
          </Typography>
          <Typography
            align={props.matchesMD ? "center" : "right"}
            variant="body1"
            paragraph
          >
            What once was confined to huge rooms and teams of engineers now
            resides in every single one of our hands. Harnessing this unlimited
            potential by using it to solve problems and better lives is at the
            heart of everything we do.
          </Typography>
          <Typography
            align={props.matchesMD ? "center" : "right"}
            variant="body1"
            paragraph
          >
            We want to help businesses capitalize on the latest and greatest
            technology. The best way to predict the future is to be the one
            building it, and we want to help guide the world into this next
            chapter of technological expansion, exploration, and innovation.
          </Typography>
          <Typography
            align={props.matchesMD ? "center" : "right"}
            variant="body1"
            paragraph
          >
            By holding ourselves to rigorous standards and pristine quality, we
            can ensure you have the absolute best tools necessary to thrive in
            this new frontier.
          </Typography>
          <Typography
            align={props.matchesMD ? "center" : "right"}
            variant="body1"
            paragraph
          >
            We see a future where every individual has personalized software
            custom tailored to their lifestyle, culture, and interests, helping
            them overcome life’s obstacles. Each project is a step towards that
            goal.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Vision;
