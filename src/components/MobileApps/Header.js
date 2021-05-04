import React from 'react'

import { Grid, Typography } from '@material-ui/core'

const Header = (props) => {
    return (
        <Grid item container direction="column" className={props.classes.heading}>
          <Grid item>
            <Typography align={props.matchesMD ? "center" : undefined} variant="h2">
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={props.matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              align={props.matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              align={props.matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
    )
}

export default Header
