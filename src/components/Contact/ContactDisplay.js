import React from "react";

import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";

import { Grid, Typography } from "@material-ui/core";

const ContactDisplay = (props) => {
  return (
    <>
      <Grid item container style={{ marginTop: "2em" }}>
        <Grid item>
          <img src={phoneIcon} alt="phone" style={{ marginRight: "0.5em" }} />
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            style={{ color: props.theme.palette.common.blue, fontSize: "1rem" }}
          >
            <a
              href="tel:5555555555"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              (555) 555-5555
            </a>
          </Typography>
        </Grid>
      </Grid>
      <Grid item container style={{ marginBottom: "2em" }}>
        <Grid item>
          <img
            src={emailIcon}
            alt="envelope"
            style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            style={{ color: props.theme.palette.common.blue, fontSize: "1rem" }}
          >
            <a
              href="mailto:pedro.vsnep2001@gmail.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              pedro.vsnep2001@gmail.com
            </a>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactDisplay;
