function createEventObject(){
  try{
    var form = document.querySelector('form');
    var title = form.querySelector('input[name="title"]').value,
    desc = form.querySelector('textarea[name="description"]').value,
    date = form.querySelector('input[name="date"]').value

    if(title && desc && date){
      today = formatDate();
      if(today > date)
        throw new Error();
      var guid = uuidv4();
      var event = `${date}, ${title}, ${desc}`
      localStorage.setItem(guid, event);
    }
    window.history.go(-1);
  } catch {
    alert("Что-то пошло не так...")
  }
}

function deleteEvent(guid){
  try{
    if(guid){
      localStorage.removeItem(guid);
    }
    window.location.reload();
  } catch {
    alert("Что-то пошло не так...")
  }
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function formatDate(oldDate){
  var newDate = oldDate ?? new Date();
  return newDate.toLocaleString( 'sv', { timeZoneName: 'short' } ).slice(0, 19);
}
