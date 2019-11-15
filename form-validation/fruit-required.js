const fruitChoice = document.getElementById('fruit');

fruitChoice.addEventListener('input', () => {
  const validationErrorMessage = 'Invalid format. Accepted values: banana, cherry';

  if (fruitChoice.validity.patternMismatch) {
    fruitChoice.setCustomValidity(validationErrorMessage);
  } else {
    fruitChoice.setCustomValidity('');
  }
});
