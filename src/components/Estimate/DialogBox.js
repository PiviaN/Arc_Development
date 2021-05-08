import React from "react";

import { Grid, Dialog, DialogContent, Hidden, Button } from "@material-ui/core";

import onChange from "./functions/onChange";

import SoftwareSelections from "./SoftwareSelections";
import WebsiteSelections from "./WebsiteSelections";

import EstimateBoxTitle from "./EstimateBoxTitle";
import DialogInputs from "./DialogInputs";
import SendEstimate from "./SendEstimate";

const DialogBox = (props) => {
  return (
    <Dialog
      open={props.dialogOpen}
      onClose={() => props.setDialogOpen(false)}
      fullWidth
      maxWidth="lg"
      style={{ zIndex: 1302 }}
      fullScreen={props.matchesSM}
    >
      <EstimateBoxTitle />
      <DialogContent>
        <Grid
          container
          justify="space-around"
          direction={props.matchesSM ? "column" : "row"}
          alignItems={props.matchesSM ? "center" : undefined}
        >
          <DialogInputs
            name={props.name}
            setName={props.setName}
            setEmail={props.setEmail}
            setEmailHelper={props.setEmailHelper}
            setPhone={props.setPhone}
            setPhoneHelper={props.setPhoneHelper}
            emailHelper={props.emailHelper}
            email={props.email}
            onChange={(event) =>
              onChange(
                event,
                props.setEmail,
                props.setEmailHelper,
                props.setPhone,
                props.setPhoneHelper
              )
            }
            phoneHelper={props.phoneHelper}
            phone={props.phone}
            message={props.message}
            setMessage={props.setMessage}
            matchesSM={props.matchesSM}
            classes={props.classes}
            total={props.total}
          />
          <Grid
            item
            container
            direction="column"
            md={5}
            style={{ maxWidth: "30em" }}
            alignItems={props.matchesSM ? "center" : undefined}
          >
            <Hidden smDown>
              <Grid item>
                {props.questions.length > 2 ? (
                  <SoftwareSelections
                    service={props.service}
                    platforms={props.platforms}
                    features={props.features}
                    customFeatures={props.customFeatures}
                    users={props.users}
                  />
                ) : (
                  <WebsiteSelections category={props.category} />
                )}
              </Grid>
            </Hidden>
            <SendEstimate
              classes={props.classes}
              setLoading={props.setLoading}
              email={props.email}
              name={props.name}
              phone={props.phone}
              message={props.message}
              total={props.total}
              category={props.category}
              service={props.service}
              platforms={props.platforms}
              customFeatures={props.customFeatures}
              users={props.users}
              setAlert={props.setAlert}
              setDialogOpen={props.setDialogOpen}
              phoneHelper={props.phoneHelper}
              emailHelper={props.emailHelper}
              loading={props.loading}
            />
            <Hidden mdUp>
              <Grid item style={{ marginBottom: props.matchesSM ? "5em" : 0 }}>
                <Button
                  style={{ fontWeight: 300 }}
                  color="primary"
                  onClick={() => props.setDialogOpen(false)}
                >
                  Cancel
                </Button>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
