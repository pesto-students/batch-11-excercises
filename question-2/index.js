const p = document.createElement('p');
const formElements = [...document.getElementById('form1')];

function getFormValue() {
  const firstLastName = formElements.reduce((acc, curr) => {
    if (curr.type === 'text') {
      acc += curr.value;
    }
    return acc;
  }, '');
  p.innerText = firstLastName;
  document.body.appendChild(p);
}
