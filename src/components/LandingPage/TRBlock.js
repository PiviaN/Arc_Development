import React from "react";
import { Link } from "react-router-dom";

import { Grid, Typography, CardContent, Card, Button } from "@material-ui/core";

import ButtonArrow from "../../util/ButtonArrow";

const TRBlock = (props) => {
  return (
    <Grid item>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ height: "100em", marginTop: "12em" }}
      >
        <Card className={props.classes.revolutionCard}>
          <CardContent>
            <Grid container direction="column" style={{ textAlign: "center" }}>
              <Grid item>
                <Typography variant="h3" gutterBottom>
                  The Revolution
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Visionary insights coupled with cutting-edge technology is a
                  recipe for revolution
                </Typography>
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={props.classes.learnButtonHero}
                  onClick={() => props.setValue(2)} // p p
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={props.theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div className={props.classes.revolutionBackground} />
      </Grid>
    </Grid>
  );
};

export default TRBlock;
