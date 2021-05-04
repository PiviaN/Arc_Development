import React from "react";

import { Grid, Button } from "@material-ui/core";

import ButtonContents from "./buttonContents";

const SendMessage = (props) => {
  return (
    <Grid item container justify="center" style={{ marginTop: "2em" }}>
      <Button
        disabled={
          props.name.length === 0 ||
          props.message.length === 0 ||
          props.phoneHelper.length !== 0 ||
          props.emailHelper.length !== 0
        }
        variant="contained"
        className={props.classes.sendButton}
        onClick={() => props.setOpen(true)}
      >
        <ButtonContents />
      </Button>
    </Grid>
  );
};

export default SendMessage;
