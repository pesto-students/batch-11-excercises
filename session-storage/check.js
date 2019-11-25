/* eslint-disable */
let value = '';

window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = 'Value add successful';
  }
  
}, 200);


function addToLocalStorage(e) {
  e.preventDefault()
  const key = document.getElementById('key').value;
  const value = document.getElementById('value').value;
  sessionStorage.setItem(key, value)
  showSessionStorage();
}

function showSessionStorage() {
  const sessionData = {};
  for(let key in sessionStorage) {
    sessionData[key] = sessionStorage[key];
  }

  document.getElementsByClassName('sessionStorage')[0].innerText = JSON.stringify(sessionData);
  console.log(sessionData)

}


