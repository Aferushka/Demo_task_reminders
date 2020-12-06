import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { getAddDialogState, getIsLoading } from '../redux/reducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeAddDialog } from '../redux/actions/setAddDialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import {  MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { createReminder } from '../redux/actions/createReminder';
import { updateReminder } from '../redux/actions/updateReminder';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 350,
  },
  group: {
    marginTop: 10,
    marginRight: 80
  },
  button: {
    marginTop: 30
  }
}));

export function AddReminderDialog({ addDialogState, closeAddDialog, createReminder, updateReminder, isLoading, reminder=null, openState, closeEditForm }) {

  const classes = useStyles()

  const closeDialog = () => {
    closeAddDialog();
  }
  const [text, setText] = useState(reminder !== null ? reminder.text : '');
  const [date, setDate] = useState(reminder !== null ? reminder.date : Date());
  const [time, setTime] = useState(reminder !== null ? moment(reminder.time, 'HH:mm') : Date());

  const changeDate = (date) => {
    setDate(date)
  }

  const changeTime = (time) => {
    setTime(time)
  }

  const addReminder = () => {
    createReminder(text, moment(date).format('YYYY-MM-DD'), moment(time, 'HH:mm').format('HH:mm'));
    while(isLoading) {};
    setText('');
    setDate(Date());
    setTime(Date());
  }

  const updReminder = () => {
    updateReminder(reminder.id, text, moment(date).format('YYYY-MM-DD'), moment(time, 'HH:mm').format('HH:mm'));
    console.log(moment(time));
    while(isLoading) {};
    closeEditForm();
  }


  const changeText = (textField) => {
    setText(textField.target.value)
  }

  return (
    <Dialog open={reminder !== null ? openState : addDialogState} onClose={reminder !== null ? closeEditForm : closeDialog}>
      <DialogTitle id="add-reminder-form-title">Add a new reminder</DialogTitle>
      <DialogContent>
        <TextField id="text_input" label="Text" className={classes.root} value={text} onChange={changeText}/>
      </DialogContent>
      <DialogActions>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            fullWidth
            variant="inline"
            format="MMM dd, yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Set Date"
            value={date}
            onChange={changeDate}
            KeyboardButtonProps = {{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            fullWidth
            margin="normal"
            id="time-picker"
            label="Set Time"
            value={time}
            onChange={changeTime}
            KeyboardButtonProps = {{
              'aria-label': 'change time',
            }}
          />
        </MuiPickersUtilsProvider>
        <Button variant="text" color="primary"  className={classes.button} onClick={reminder !== null ? updReminder : addReminder}>
          <b>{reminder !== null ? 'SAVE' : 'ADD'}</b>
        </Button>
      </DialogActions>
    </Dialog>
  );
};


const mapStateToProps = (state, props) => ({
  addDialogState: getAddDialogState(state),
  isLoading: getIsLoading(state),
  reminder: props.reminder,
  openState: props.openState,
  closeEditForm: props.closeEditForm
});

const mapDispatchToProps = dispatch => bindActionCreators({
  closeAddDialog: closeAddDialog,
  createReminder: createReminder,
  updateReminder: updateReminder
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReminderDialog);

