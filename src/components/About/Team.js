import React from "react";

import profile from "../../assets/founder.jpg";
import puppy from "../../assets/puppy.svg";
import yearbook from "../../assets/yearbook.svg";

import { Grid, Typography, Avatar, Hidden } from "@material-ui/core";

const Team = (props) => {
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      className={props.classes.rowContainer}
      style={{ marginBottom: "15em" }}
    >
      <Grid item>
        <Typography align="center" variant="h4" gutterBottom>
          Team
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" paragraph align="center">
          Zachary Reece, Founder
        </Typography>
        <Typography variant="body1" paragraph align="center">
          I started coding when I was 9 years old.
        </Typography>
      </Grid>
      <Grid item>
        <Avatar alt="founder" src={profile} className={props.classes.avatar} />
      </Grid>
      <Grid item container justify={props.matchesMD ? "center" : undefined}>
        <Hidden lgUp>
          <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
            <Typography variant="body1" align="center" paragraph>
              I taught myself basic coding from a library book in third grade,
              and ever since then my passion has solely been set on learning —
              learning about computers, learning mathematics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Now I’m ready to apply everything I’ve learned, and to help others
              with the intuition I have developed.
            </Typography>
          </Grid>
        </Hidden>
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={props.matchesMD ? "center" : undefined}
          style={{ marginBottom: props.matchesMD ? "2.5em" : 0 }}
        >
          <Grid item>
            <img
              src={yearbook}
              alt="yearbook page about founder"
              style={{ maxWidth: props.matchesMD ? 300 : undefined }}
            />
          </Grid>
          <Grid item>
            <Typography variant="caption">
              a page from my Sophomore yearbook
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
            <Typography variant="body1" align="center" paragraph>
              I taught myself basic coding from a library book in third grade,
              and ever since then my passion has solely been set on learning —
              learning about computers, learning mathematics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Now I’m ready to apply everything I’ve learned, and to help others
              with the intuition I have developed.
            </Typography>
          </Grid>
        </Hidden>
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={props.matchesMD ? "center" : "flex-end"}
        >
          <Grid item>
            <img
              src={puppy}
              alt="grey spotted puppy"
              style={{ maxWidth: props.matchesMD ? 300 : undefined }}
            />
          </Grid>
          <Grid item>
            <Typography variant="caption">
              my miniature dapple dachshund, Sterling
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Team;
