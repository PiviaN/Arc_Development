import React from "react";

import {
  Dialog,
  DialogContent,
  Grid,
  Button,
  CircularProgress,
} from "@material-ui/core";

import ButtonContents from "./buttonContents";
import DialogInputs from "./DialogInputs";

const DialogBox = (props) => {
  return (
    <Dialog
      style={{ zIndex: 1302 }}
      open={props.open}
      fullScreen={props.matchesXS}
      onClose={() => props.setOpen(false)}
      PaperProps={{
        style: {
          paddingTop: props.matchesXS ? "1em" : "5em",
          paddingBottom: props.matchesXS ? "1em" : "5em",
          paddingLeft: props.matchesXS
            ? 0
            : props.matchesSM
            ? "5em"
            : props.matchesMD
            ? "10em"
            : "20em",
          paddingRight: props.matchesXS
            ? 0
            : props.matchesSM
            ? "5em"
            : props.matchesMD
            ? "10em"
            : "20em",
        },
      }}
    >
      <DialogContent>
        <DialogInputs
          name={props.name}
          setName={props.setName}
          emailHelper={props.emailHelper}
          email={props.email}
          onChange={props.onChange}
          setEmail={props.setEmail}
          setEmailHelper={props.setEmailHelper}
          setPhone={props.setPhone}
          setPhoneHelper={props.setPhoneHelper}
          matchesXS={props.matchesXS}
          message={props.message}
          setMessage={props.setMessage}
          classes={props.classes}
          phoneHelper={props.phoneHelper}
          phone={props.phone}
        />
        <Grid
          item
          container
          direction={props.matchesSM ? "column" : "row"}
          style={{ marginTop: "2em" }}
          alignItems="center"
        >
          <Grid item>
            <Button
              style={{ fontWeight: 300 }}
              color="primary"
              onClick={() => props.setOpen(false)}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              disabled={
                props.name.length === 0 ||
                props.message.length === 0 ||
                props.phoneHelper.length !== 0 ||
                props.emailHelper.length !== 0
              }
              variant="contained"
              className={props.classes.sendButton}
              onClick={() =>
                props.onConfirm(
                  props.setLoading,
                  props.setOpen,
                  props.setName,
                  props.setEmail,
                  props.setPhone,
                  props.setMessage,
                  props.setAlert,
                  props.name,
                  props.email,
                  props.phone,
                  props.message
                )
              }
            >
              {props.loading ? (
                <CircularProgress size={30} />
              ) : (
                <ButtonContents />
              )}
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
