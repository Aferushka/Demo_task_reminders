import { setIsLoading } from '../actions';


export function updateReminder(id, text, date, time) {
  return dispatch => {
    dispatch(setIsLoading(true));
    const reminder = {
      text: text,
      date: date,
      time: time
    };

    fetch(`http://` + process.env.REACT_APP_BACK_HOST + `:8000/api/reminders/` + id + `/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(reminder)
    })
      .then(result => {
        console.log(result);
        result.json()})
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