import React, { useState } from "react";

import useStyles from "./styles";

import { useTheme, Grid, useMediaQuery, Snackbar } from "@material-ui/core";

import backArrow from "../../../assets/backArrow.svg";
import backArrowDisabled from "../../../assets/backArrowDisabled.svg";
import forwardArrow from "../../../assets/forwardArrow.svg";
import forwardArrowDisabled from "../../../assets/forwardArrowDisabled.svg";

import { defaultQuestions } from "../../../data/questions";

import { nextQuestion, previousQuestion } from "../functions/changeQuestions";
import {
  backButtonDisabled,
  forwardButtonDisabled,
} from "../functions/arrowDisabled";
import estimateDisabled from "../functions/estimateDisabled";
import handleSelect from "../functions/handleSelect";
import getTotal from "../functions/getTotal";
import getPlatforms from "../functions/getPlatforms";
import { getFeatures, getCustomFeatures } from "../functions/features";
import getCategory from "../functions/getCategory";

import EstimateAnimation from "../EstimateAnimation";
import QuestionsBoxes from "../QuestionsBoxes";
import DialogBox from "../DialogBox";

export default function Estimate() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [questions, setQuestions] = useState(defaultQuestions);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [total, setTotal] = useState(0);
  const [service, setService] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState("");
  const [users, setUsers] = useState("");
  const [category, setCategory] = useState("");

  const [alert, setAlert] = useState({ open: false, color: "" });

  const [loading, setLoading] = useState(false);

  return (
    <Grid container direction="row">
      <EstimateAnimation matchesMD={matchesMD} />
      <QuestionsBoxes
        matchesMD={matchesMD}
        questions={questions}
        handleSelect={handleSelect}
        setQuestions={setQuestions}
        setService={setService}
        setPlatforms={setPlatforms}
        setFeatures={setFeatures}
        setCustomFeatures={setCustomFeatures}
        setUsers={setUsers}
        setCategory={setCategory}
        matchesSM={matchesSM}
        theme={theme}
        classes={classes}
        backButtonDisabled={backButtonDisabled}
        previousQuestion={previousQuestion}
        backArrowDisabled={backArrowDisabled}
        backArrow={backArrow}
        forwardButtonDisabled={forwardButtonDisabled}
        nextQuestion={nextQuestion}
        forwardArrowDisabled={forwardArrowDisabled}
        forwardArrow={forwardArrow}
        estimateDisabled={estimateDisabled}
        setDialogOpen={setDialogOpen}
        getTotal={getTotal}
        getPlatforms={getPlatforms}
        setTotal={setTotal}
        getFeatures={getFeatures}
        getCustomFeatures={getCustomFeatures}
        getCategory={getCategory}
      />
      <DialogBox
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        matchesSM={matchesSM}
        name={name}
        setName={setName}
        setEmail={setEmail}
        setEmailHelper={setEmailHelper}
        setPhone={setPhone}
        setPhoneHelper={setPhoneHelper}
        emailHelper={emailHelper}
        email={email}
        phoneHelper={phoneHelper}
        phone={phone}
        message={message}
        setMessage={setMessage}
        classes={classes}
        total={total}
        questions={questions}
        service={service}
        platforms={platforms}
        features={features}
        customFeatures={customFeatures}
        users={users}
        category={category}
        setLoading={setLoading}
        setAlert={setAlert}
        loading={loading}
      />
      <Snackbar
        open={alert.open}
        ContentProps={{
          style: {
            backgroundColor: alert.color,
          },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message={
          alert.color === "#4BB543"
            ? "Message sent successfully!"
            : "Something went wrong! Please try again."
        }
        autoHideDuration={4000}
        onClose={() => setAlert(false)}
      />
    </Grid>
  );
}
