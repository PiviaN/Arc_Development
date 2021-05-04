import React, { useState } from "react";

import { useTheme, Grid, useMediaQuery, Snackbar } from "@material-ui/core";

import useStyles from "./styles";
import onChange from "../functions/onChange";
import onConfirm from "../functions/onConfirm";

import Header from "../Header";
import ContactDisplay from "../ContactDisplay";
import Inputs from "../Inputs";
import SendMessage from "../SendMessage";
import DialogBox from "../DialogBox";
import CallToAction from "../CallToAction";

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Header matchesMD={matchesMD} theme={theme} />
            <ContactDisplay theme={theme} />
            <Inputs
              name={name}
              setName={setName}
              emailHelper={emailHelper}
              email={email}
              onChange={onChange}
              setEmail={setEmail}
              setEmailHelper={setEmailHelper}
              setPhone={setPhone}
              setPhoneHelper={setPhoneHelper}
              phoneHelper={phoneHelper}
              message={message}
              setMessage={setMessage}
              classes={classes}
            />
            <SendMessage
              name={name}
              message={message}
              phoneHelper={phoneHelper}
              emailHelper={emailHelper}
              classes={classes}
              setOpen={setOpen}
            />
          </Grid>
        </Grid>
      </Grid>
      <DialogBox
        open={open}
        setOpen={setOpen}
        matchesXS={matchesXS}
        matchesSM={matchesSM}
        matchesMD={matchesMD}
        name={name}
        setName={setName}
        emailHelper={emailHelper}
        email={email}
        onChange={onChange}
        setEmail={setEmail}
        setEmailHelper={setEmailHelper}
        setPhone={setPhone}
        setPhoneHelper={setPhoneHelper}
        phoneHelper={phoneHelper}
        message={message}
        setMessage={setMessage}
        classes={classes}
        setAlert={setAlert}
        setLoading={setLoading}
        loading={loading}
        phone={phone}
        onConfirm={onConfirm}
      />
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      <CallToAction
        matchesMD={matchesMD}
        classes={classes}
        setValue={props.setValue}
        theme={theme}
      />
    </Grid>
  );
}
