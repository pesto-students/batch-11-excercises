/* eslint-disable */
let value = '';

function onSubmit() {
  const keyInput = document.getElementById('key');
  const valueInput = document.getElementById('value');
  window.sessionStorage.setItem(keyInput.value, valueInput.value);
}

window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = `Value add successful`;
  }

  const sessionDataElement = document.getElementById('sessionData');
  sessionDataElement.innerHTML = "";
  for(let i = 0; i < sessionStorage.length; i++) {
    const key = window.sessionStorage.key(i);
    const value = window.sessionStorage.getItem(key);
    const listElement = document.createElement('li');
    listElement.innerText = key + " - "  + value;
    sessionDataElement.append(listElement);
  }


}, 200);

document.getElementById('submitButton').onclick = onSubmit;

