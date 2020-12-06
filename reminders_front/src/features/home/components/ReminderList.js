import React, { Component } from 'react';
import { getIsLoading, getReminders, getAddDialogState } from '../redux/reducer';
import { loadReminders } from '../redux/actions/loadReminders';
import { connect } from 'react-redux';
import LoadingTemplate from './LoadingTemplate';
import {bindActionCreators} from "redux";
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ReminderItem from './ReminderItem';
import AddReminderDialog from './AddReminderDialog';


class ReminderList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { loadReminders } = this.props;
    this.interval = setInterval(() => loadReminders(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    const { isLoading, addDialogState, reminders } = this.props;

    return (
      <div style={{ marginTop: 5 }}>
        {
          isLoading
            ? <LoadingTemplate/>
            : (
              <div>
                { reminders.length == 0 &&
                  <Typography align="center">
                    <h2>You have no reminders yet!</h2>
                    <h2>It's time to <i>add one!</i></h2>
                  </Typography>
                }
                <Grid container spacing={1}>
                  {reminders.map((reminder) => (
                    <ReminderItem key={reminder.id} reminder={reminder}/>
                  ))}
                </Grid>
                { addDialogState &&
                  <AddReminderDialog/>
                }
              </div>
            )
        }
      </div>
    );
  }

};

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  addDialogState: getAddDialogState(state),
  reminders: getReminders(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadReminders: loadReminders
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderList);
