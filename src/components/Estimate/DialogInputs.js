import React from 'react'

import { Grid, TextField, Typography } from '@material-ui/core'

const DialogInputs = (props) => {
    return (
        <Grid
            item
            container
            direction="column"
            md={7}
            style={{ maxWidth: "20em" }}
          >
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={props.name}
                onChange={(event) =>
                  props.setName(
                    event.target.value,
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
                label="Email"
                error={props.emailHelper.length !== 0}
                helperText={props.emailHelper}
                id="email"
                fullWidth
                value={props.email}
                onChange={props.onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Phone"
                helperText={props.phoneHelper}
                error={props.phoneHelper.length !== 0}
                id="phone"
                fullWidth
                value={props.phone}
                onChange={props.onChange}
              />
            </Grid>
            <Grid item>
              <TextField
                InputProps={{ disableUnderline: true }}
                value={props.message}
                className={props.classes.message}
                multiline
                fullWidth
                placeholder="Tell us more about your project."
                rows={10}
                id="message"
                onChange={(event) =>
                  props.setMessage(
                    event.target.value,
                    props.setEmail,
                    props.setEmailHelper,
                    props.setPhone,
                    props.setPhoneHelper
                  )
                }
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={props.matchesSM ? "center" : undefined}
                style={{ lineHeight: 1.1 }}
              >
                We can create this digital solution for an estimated{" "}
                <span className={props.classes.specialText}>${props.total.toFixed(2)}</span>
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={props.matchesSM ? "center" : undefined}
              >
                Fill out your name, number, and email, place your request, and
                we’ll get back to you with details moving forward and a final
                price.
              </Typography>
            </Grid>
          </Grid>
    )
}

export default DialogInputs
