import React from "react";

import { Grid, Typography, TextField } from "@material-ui/core";

const DialogInputs = (props) => {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Confirm Message
          </Typography>
        </Grid>

        <Grid item style={{ marginBottom: "0.5em" }}>
          <TextField
            label="Name"
            id="name"
            fullWidth
            value={props.name}
            onChange={(event) => props.setName(event.target.value)}
          />
        </Grid>
        <Grid item style={{ marginBottom: "0.5em" }}>
          <TextField
            label="Email"
            error={props.emailHelper.length !== 0}
            helperText={props.emailHelper}
            id="email"
            fullWidth
            value={props.email}
            onChange={(event) =>
              props.onChange(
                event,
                props.setEmail,
                props.setEmailHelper,
                props.setPhone,
                props.setPhoneHelper
              )
            }
          />
        </Grid>
        <Grid item style={{ marginBottom: "0.5em" }}>
          <TextField
            label="Phone"
            error={props.phoneHelper.length !== 0}
            helperText={props.phoneHelper}
            id="phone"
            fullWidth
            value={props.phone}
            onChange={(event) =>
              props.onChange(
                event,
                props.setEmail,
                props.setEmailHelper,
                props.setPhone,
                props.setPhoneHelper
              )
            }
          />
        </Grid>
      </Grid>
      <Grid item style={{ maxWidth: props.matchesXS ? "100%" : "20em" }}>
        <TextField
          InputProps={{ disableUnderline: true }}
          value={props.message}
          className={props.classes.message}
          multiline
          fullWidth
          rows={10}
          id="message"
          onChange={(event) => props.setMessage(event.target.value)}
        />
      </Grid>
    </>
  );
};

export default DialogInputs;
