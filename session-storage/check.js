function renderStorage() {
  const status = document.querySelector('.status');
  status.innerHTML = '';
  const ul = document.createElement('ul');
  ul.style.listStyle = 'none';
  status.appendChild(ul);
  if (sessionStorage.length) {
    for (const key of Object.keys(sessionStorage)) {
      const li = document.createElement('li');
      li.innerHTML = `Key : ${key}, Value : ${sessionStorage.getItem(key)}`;
      ul.appendChild(li);
      const button = document.createElement('button');
      button.style.margin = '20px';
      button.innerHTML = 'Delete';
      button.setAttribute('type', 'button');
      button.setAttribute('value', key);
      button.onclick = function(event) {
        const key = event.target.value;
        sessionStorage.removeItem(key);
        renderStorage();
      };
      li.appendChild(button);
    }
  }
}
const submit = document.getElementById('submit-btn');
submit.addEventListener('click', () => {
  const key = document.getElementById('key').value;
  const value = document.getElementById('value').value;
  sessionStorage.setItem(key, value);
  renderStorage();
});
renderStorage();
