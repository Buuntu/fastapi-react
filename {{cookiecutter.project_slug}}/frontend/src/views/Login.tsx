import React, { FC } from 'react';
import {
  Paper,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Face, Fingerprint } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(1),
  },
  button: {
    textTransform: 'none',
  },
  marginTop: {
    marginTop: 10,
  },
}));

export const Login: FC = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.padding}>
      <div className={classes.margin}>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <Face />
          </Grid>
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="username"
              label="Username"
              type="email"
              fullWidth
              autoFocus
              required
            />
          </Grid>
        </Grid>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <Fingerprint />
          </Grid>
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="username"
              label="Password"
              type="password"
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
          </Grid>
          <Grid item>
            <Button
              disableFocusRipple
              disableRipple
              className={classes.button}
              variant="text"
              color="primary"
            >
              Forgot password ?
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.marginTop}>
          <Button variant="outlined" color="primary" className={classes.button}>
            Login
          </Button>
        </Grid>
      </div>
    </Paper>
  );
};
