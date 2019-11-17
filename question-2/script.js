/* eslint-disable no-undef */
function readFormValues() {
  const firstNameFormValue = document.getElementById('fname').value;
  const lastNameFormValue = document.getElementById('lname').value;
  const firstNameParagraph = document.getElementById('firstName');
  const lastNameParagraph = document.getElementById('lastName');
  const result = document.getElementById('result');
  result.style.display = 'inline-block';
  firstNameParagraph.innerHTML = `First Name: ${firstNameFormValue}`;
  lastNameParagraph.innerHTML = `Last Name: ${lastNameFormValue}`;
}
document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault();
  readFormValues();
});
