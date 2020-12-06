import React from 'react';
import NavigationHead from './components/NavigationHead';
import ReminderList from './components/ReminderList';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    backgroundColor: grey['300'],
  }
});

export default function BaseContainer() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavigationHead/>
      <ReminderList/>
    </div>
  );
}
