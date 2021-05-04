import React from "react";
import Lottie from "react-lottie";

import { Grid, Typography } from "@material-ui/core";

import { revolutionOptions } from "../../data/options";

const Technology = (props) => {
  return (
    <Grid
      item
      container
      direction={props.matchesMD ? "column" : "row"}
      alignItems="center"
      className={props.classes.rowContainer}
      style={{ marginTop: "10em", marginBottom: "10em" }}
    >
      <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
        <Grid item>
          <Typography
            align={props.matchesMD ? "center" : undefined}
            variant="h4"
            gutterBottom
          >
            Technology
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            align={props.matchesMD ? "center" : undefined}
            variant="body1"
            paragraph
          >
            In 2013, Facebook invented a new way of building websites. This new
            system, React.js, completely revolutionizes the process and practice
            of website development.
          </Typography>
          <Typography
            align={props.matchesMD ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Instead of chaining together long individual pages, like traditional
            websites, React websites are built with little chunks of code called
            components. These components are faster, easier to maintain, and are
            easily reused and customized, each serving a singular purpose.
          </Typography>
          <Typography
            align={props.matchesMD ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Two years later they shocked the world by releasing a similar
            system, React Native, for producing iOS and Android apps. Instead of
            having to master two completely separate development platforms, you
            can leverage the knowledge you already possessed from building
            websites and reapply it directly! This was a huge leap forward.
          </Typography>
          <Typography
            align={props.matchesMD ? "center" : undefined}
            variant="body1"
            paragraph
          >
            This technology is now being used by companies like AirBnB,
            Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
            Facebook purchased Instagram large portions of it were even rebuilt
            using React.
          </Typography>
          <Typography
            align={props.matchesMD ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Developers have since built on top of these systems by automating
            project setup and deployment, allowing creators to focus as much as
            possible on their work itself.
          </Typography>
          <Typography
            align={props.matchesMD ? "center" : undefined}
            variant="body1"
            paragraph
          >
            These technical advancements translate into savings by significantly
            reducing the workload and streamlining the workflow for developing
            new pieces of software, while also lowering the barrier to entry for
            mobile app development.
          </Typography>
          <Typography
            align={props.matchesMD ? "center" : undefined}
            variant="body1"
            paragraph
          >
            This puts personalization in your pocket — faster, better, and more
            affordable than ever before.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container justify={props.matchesMD ? "center" : "flex-end"} lg>
        <Lottie
          options={revolutionOptions}
          isStopped={true}
          style={{ maxWidth: "40em", margin: 0 }}
        />
      </Grid>
    </Grid>
  );
};

export default Technology;
