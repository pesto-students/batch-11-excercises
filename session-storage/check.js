/* eslint-disable */
const addSessionStorage = (event) => {
  event.preventDefault();
  const key = document.getElementById('key').value
  const value = document.getElementById('value').value
  sessionStorage.setItem(key, value);
  document.getElementsByClassName('status')[0].innerText = 'Value add successful';
  document.getElementById('key').value = ''
  document.getElementById('value').value = ''
}

const lisAllSessionKeys = () => {
  const keys = Object.keys(sessionStorage)
  console.log(keys)
  const sessionKeysElement = document.getElementById('sessionKeys')
  if(keys.length === 0) {
    sessionKeysElement.innerText = "NO Session Key Present!"
  } else {
    const ul = document.createElement('ul')
    document.getElementById('sessionKeys').appendChild(ul)
    keys.map((key)=>{
      const li = ul.appendChild('li')
      li.innerHtml = `Key: ${key} Value: ${sessionStorage[key]} `
    })
  }
}
