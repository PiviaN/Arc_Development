import React from "react";
import { Link } from "react-router-dom";

import ButtonArrow from "../../util/ButtonArrow";

import { Grid, Typography, Button } from "@material-ui/core";

const InformationBlock = (props) => {
  return (
    <Grid item>
      <Grid
        container
        style={{ height: "80em" }}
        alignItems="center"
        direction="row"
        className={props.classes.infoBackground}
      >
        <Grid
          item
          container
          style={{
            textAlign: props.matchesXS ? "center" : "inherit",
          }}
          direction={props.matchesXS ? "column" : "row"}
        >
          <Grid
            item
            sm
            style={{
              marginLeft: props.matchesXS ? 0 : props.matchesSM ? "2em" : "5em",
            }}
          >
            <Grid
              container
              style={{ marginBottom: props.matchesXS ? "10em" : 0 }}
              direction="column"
            >
              <Typography variant="h2" style={{ color: "white" }}>
                About Us
              </Typography>
              <Typography variant="subtitle2">Let's get personal.</Typography>
              <Grid item>
                <Button
                  component={Link}
                  to="/about"
                  variant="outlined"
                  style={{ color: "white", borderColor: "white" }}
                  className={props.classes.learnButton}
                  onClick={() => props.setValue(3)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sm
            style={{
              marginRight: props.matchesXS
                ? 0
                : props.matchesSM
                ? "2em"
                : "5em",
              textAlign: props.matchesXS ? "center" : "right",
            }}
          >
            <Grid container direction="column">
              <Typography variant="h2" style={{ color: "white" }}>
                Contact Us
              </Typography>
              <Typography variant="subtitle2">Say hello!</Typography>
              <Grid item>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  style={{ color: "white", borderColor: "white" }}
                  className={props.classes.learnButton}
                  onClick={() => props.setValue(4)} // p p
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InformationBlock;
