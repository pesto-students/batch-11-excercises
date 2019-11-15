const fruitChoice = document.getElementById('fruit');

fruitChoice.addEventListener('input', (event) => {
  const currentLength = event.target.value.length;

  const staticMessageForValidationError = 'Please lengthen this text to 6 characters or more';
  const dynamicMessageForValidationError = `(you are currently using ${currentLength} character).`;
  const validationErrorMessage = `${staticMessageForValidationError} ${dynamicMessageForValidationError}`;

  if (fruitChoice.validity.tooShort) {
    fruitChoice.setCustomValidity(validationErrorMessage);
  } else {
    fruitChoice.setCustomValidity('');
  }
});
