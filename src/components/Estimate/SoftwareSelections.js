import React from "react";

import check from "../../assets/check.svg";

import { Grid, Typography } from "@material-ui/core";

const SoftwareSelections = (props) => {
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.25em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {`You want ${props.service} `}
            {props.platforms.length > 0
              ? `for ${
                  props.platforms.indexOf("Web Application") > -1 &&
                  props.platforms.length === 1
                    ? "a Web Application."
                    : props.platforms.indexOf("Web Application") > -1 &&
                      props.platforms.length === 2
                    ? `a Web Application and an ${props.platforms[1]}.`
                    : props.platforms.length === 1
                    ? `an ${props.platforms[0]}`
                    : props.platforms.length === 2
                    ? "an iOS Application and an Android Application."
                    : props.platforms.length === 3
                    ? "a Web Application, an iOS Application, and an Android Application."
                    : null
                }`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.25em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {"with "}
            {props.features.length > 0
              ? props.features.length === 1
                ? `${props.features[0]}.`
                : props.features.length === 2
                ? `${props.features[0]} and ${props.features[1]}.`
                : props.features

                    .filter(
                      (feature, index) => index !== props.features.length - 1
                    )

                    .map((feature, index) => (
                      <span key={index}>{`${feature}, `}</span>
                    ))
              : null}
            {props.features.length > 0 &&
            props.features.length !== 1 &&
            props.features.length !== 2
              ? ` and ${props.features[props.features.length - 1]}.`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {`The custom features will be of ${props.customFeatures.toLowerCase()}, and the project will be used by about ${
              props.users
            } users.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SoftwareSelections;
