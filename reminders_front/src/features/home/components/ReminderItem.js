import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EventIcon from '@material-ui/icons/Event';
import AlarmIcon from '@material-ui/icons/Alarm';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { deleteReminder } from '../redux/actions/deleteReminder';
import AddReminderDialog from './AddReminderDialog';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  text: {
    fontSize: 16,
  },
  box: {
    color: 'grey'
  }

});

export default function ReminderItem({ reminder }) {

  const classes = useStyles();
  const [showEditForm, setEditForm] = useState(false);

  const openEditForm = () => {
    setEditForm(true);
  };

  const closeEditForm = () => {
    setEditForm(false);
  };

  return (
    <React.Fragment>
      {showEditForm &&
        <AddReminderDialog reminder={reminder} openState={showEditForm} closeEditForm={closeEditForm}/>
      }
      <Grid item xs={12}>
        <Card className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={11}>
              <CardContent>
                <Typography className={classes.text} variant="h6" component="h2">
                  { reminder.text }
                </Typography>
                <Box className={classes.box} justify="center">
                  <EventIcon/>
                  <span>{moment(reminder.date).format('ll')}</span>
                  <span>   |   </span>
                  <AlarmIcon/>
                  <span>{moment(reminder.time, 'HH:mm:ss').format('LT')}</span>
                </Box>
              </CardContent>
            </Grid>
            <Grid item xs={1} alignContent="center" justify="center">
              <PopupState variant="popover">
                {(popupState) => (
                  <React.Fragment>
                    <IconButton
                      color="primary"
                      align="center"
                      {...bindTrigger(popupState)}>
                      <ExpandMoreIcon/>
                    </IconButton>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={openEditForm}>Edit</MenuItem>
                      <MenuItem onClick={() => {deleteReminder(reminder.id)}}>Delete</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
