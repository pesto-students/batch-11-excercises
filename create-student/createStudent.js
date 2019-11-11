
function createStudent(filter) {
  if (filter === undefined) {
    return 'The student likes JavaScript and ES2015';
  }
  if (!filter.likesES2015) {
    return 'The student likes JavaScript!';
  }
  if (!filter.likesJavaScript) {
    return 'The student likes ES2015!';
  }
  if (!filter.likesES2015 && !filter.likesJavaScript) {
    return 'The student does not like much...';
  }
  return '';
}

export {
  createStudent,
};
