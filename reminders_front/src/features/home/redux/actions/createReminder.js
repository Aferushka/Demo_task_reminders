import { setIsLoading } from '../actions';


export function createReminder(text, date, time) {
  return dispatch => {
    dispatch(setIsLoading(true));
    const reminder = {
      text: text,
      date: date,
      time: time
    };
    fetch(`http://localhost:8000/api/reminders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(reminder)
    })
      .then(result => result.json())
      .then(response => {
        if (response.error) {
          throw (response.error);
        }
      })
      .catch(error => {
        //TODO Добавить отображение ошибок на странице
        console.log(error);
      });
  };
}