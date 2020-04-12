import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    padding: 100,
    marginTop: 50,
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default function BaseContainer({ children, ...props }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} {...props}>
      {children}
    </Grid>
  );
}
