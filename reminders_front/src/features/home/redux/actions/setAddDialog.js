import { setAddDialogState } from '../actions';


export function openAddDialog() {
  return dispatch => {
    dispatch(setAddDialogState(true));
  }
}

export function closeAddDialog() {
  return dispatch => {
    dispatch(setAddDialogState(false));
  }
}