export const REFRESH_REMINDERS = 'REFRESH_REMINDERS';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SET_ADD_DIALOG_STATE = 'SET_ADD_DIALOG_STATE';


export function refreshReminders(reminders) {
  return {
    type: REFRESH_REMINDERS,
    reminders: reminders
  }
}

export function setIsLoading(isLoading) {
  return {
    type: SET_IS_LOADING,
    isLoading: isLoading
  }
}

export function setAddDialogState(addDialogState) {
  return {
    type: SET_ADD_DIALOG_STATE,
    addDialogState: addDialogState
  }
}