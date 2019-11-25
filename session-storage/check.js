/* eslint-disable */
let value = '';

window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = 'Value add successful';
  }
  let storageString = '';
  for (let key in sessionStorage) {
    if (sessionStorage.hasOwnProperty(key)) {
      storageString += key + " : " + sessionStorage.getItem(key) + "\n";
    }
  }
  document.getElementById('sessionData').innerText = storageString;
}, 200);

function addItemToLocalStorage() {
  let key = document.getElementById('key').value;
  let value = document.getElementById('value').value;
  sessionStorage.setItem(key, value)
}

