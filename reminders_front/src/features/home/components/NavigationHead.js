import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { bindActionCreators } from 'redux';
import { openAddDialog } from '../redux/actions/setAddDialog';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(2),
  },
  drawersButton: {
    marginBottom: theme.spacing(1),
  },
}));


export function NavigationHead({ openAddDialog }) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            Reminders
          </Typography>
          <IconButton
            color="secondary"
            className={classes.button}
            onClick={() => {openAddDialog()}}
            >
            <AddCircleIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};


const mapDispatchToProps = dispatch => bindActionCreators({
  openAddDialog: openAddDialog
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(NavigationHead);

