import { setIsLoading } from '../actions';


export function createReminder(text, date, time) {
  return dispatch => {
    dispatch(setIsLoading(true));
    const reminder = {
      text: text,
      date: date,
      time: time
    };
    console.log(reminder);
    fetch(`http://` + process.env.REACT_APP_BACK_HOST + `:8000/api/reminders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(reminder)
    })
      .then(result => result.json())
      .then(response => {
        console.log(response);
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