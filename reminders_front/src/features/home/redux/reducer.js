import initialState from './initialState';
import {REFRESH_REMINDERS, SET_IS_LOADING, SET_ADD_DIALOG_STATE} from './actions';

const reducers = [
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case REFRESH_REMINDERS:
      return {
        ...state,
        reminders: action.reminders
      }
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case SET_ADD_DIALOG_STATE:
      return {
        ...state,
        addDialogState: action.addDialogState
      }
    default:
      newState = state;
      break;
  }

  return reducers.reduce((s, r) => r(s, action), newState);
}

export const getIsLoading = state => state.home.isLoading;
export const getReminders = state => state.home.reminders;
export const getAddDialogState = state => state.home.addDialogState;
