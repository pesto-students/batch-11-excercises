const stylingButton = document.getElementById('styleParagraph');
const unStyledParagraph = document.getElementById('nonStyledParagraph');

stylingButton.addEventListener('click', () => {
    unStyledParagraph.style.backgroundColor = 'red';
})


