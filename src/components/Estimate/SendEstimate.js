import React from "react";

import { Grid, Button, CircularProgress } from '@material-ui/core'

import send from "../../assets/send.svg";

import sendEstimate from "./functions/sendEstimate";

const SendEstimate = (props) => {
  return (
    <Grid item>
      <Button
        variant="contained"
        className={props.classes.estimateButton}
        onClick={() =>
          sendEstimate(
            props.setLoading,
            props.email,
            props.name,
            props.phone,
            props.message,
            props.total,
            props.category,
            props.service,
            props.platforms,
            props.features,
            props.customFeatures,
            props.users,
            props.setAlert,
            props.setAlertMesssage,
            props.setDialogOpen
          )
        }
        disabled={
          props.name.length === 0 ||
          props.message.length === 0 ||
          props.phoneHelper.length !== 0 ||
          props.emailHelper.length !== 0
        }
      >
        {props.loading ? (
          <CircularProgress />
        ) : (
          <React.Fragment>
            Place Request
            <img
              src={send}
              alt="paper airplane"
              style={{ marginLeft: "0.5em" }}
            />
          </React.Fragment>
        )}
      </Button>
    </Grid>
  );
};

export default SendEstimate;
