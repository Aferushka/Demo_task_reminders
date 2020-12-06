import React from 'react';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)

  },
}));

export default function LoadingTemplate() {
  const classes = useStyles();
  return (
    <div>
      <Typography align="center">
        <h2>Loading...</h2>
      </Typography>
      <div className={classes.root}>
        <CircularProgress/>
      </div>
    </div>
  );
};

