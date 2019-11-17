
function createStudent(inputObject) {
  const { likesES2015, likesJavaScript } = inputObject || {};
  if (inputObject === undefined) {
    return 'The student likes JavaScript and ES2015';
  }
  if (!likesES2015 && likesJavaScript === undefined) {
    return 'The student likes JavaScript!';
  }
  if (!likesJavaScript && likesES2015 === undefined) {
    return 'The student likes ES2015!';
  }
  return 'The student does not like much...';
}

export {
  createStudent,
};
