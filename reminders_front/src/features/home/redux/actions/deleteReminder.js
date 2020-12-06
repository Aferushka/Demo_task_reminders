export function deleteReminder(id) {
    fetch(`http://` + process.env.REACT_APP_BACK_HOST + `:8000/api/reminders/` + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
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
  }
