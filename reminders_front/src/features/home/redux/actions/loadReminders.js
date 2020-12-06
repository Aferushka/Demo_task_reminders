import {refreshReminders, setIsLoading} from '../actions';


export function loadReminders() {
  return dispatch => {
    fetch(`http://localhost:8000/api/reminders/`)
      .then(result => result.json())
      .then(reminders => {
        if (reminders.error) {
          throw (reminders.error);
        }
        dispatch(refreshReminders(reminders));
        dispatch(setIsLoading(false));
      })
      .catch(error => {
        //TODO Добавить отображение ошибок на странице
        console.log(error)
      })
  }
}