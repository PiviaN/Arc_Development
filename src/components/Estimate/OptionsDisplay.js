import React from "react";

import { Grid, Typography, Button } from "@material-ui/core";

const OptionsDisplay = (props) => {
  return (
    <Grid item container>
      {props.question.options.map((option) => (
        <Grid
          item
          container
          component={Button}
          onClick={() =>
            props.handleSelect(
              option.id,
              props.questions,
              props.setQuestions,
              props.setService,
              props.setPlatforms,
              props.setFeatures,
              props.setCustomFeatures,
              props.setUsers,
              props.setCategory
            )
          }
          style={{
            display: "block",
            textTransform: "none",
            borderRadius: 0,
            marginBottom: props.matchesSM ? "1.5em" : 0,
            backgroundColor: option.selected
              ? props.theme.palette.common.orange
              : undefined,
          }}
          direction="column"
          alignItems="center"
          md
        >
          <Grid item style={{ maxWidth: "14em" }}>
            <Typography
              align="center"
              variant="h6"
              style={{
                lineHeight: 1,
                marginBottom: "1em",
              }}
            >
              {option.title}
            </Typography>
            <Typography align="center" variant="caption">
              {option.subtitle}
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={option.icon}
              alt={option.iconAlt}
              className={props.classes.icon}
            />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default OptionsDisplay;
