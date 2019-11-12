function createStudent({
  likesJavaScript = true,
  likesES2015 = true,
} = {}) {
  if (likesES2015 && likesJavaScript) {
    return 'The student likes JavaScript and ES2015';
  }
  if (!likesJavaScript && !likesES2015) {
    return 'The student does not like much...';
  }
  if (!likesES2015) {
    return 'The student likes JavaScript!';
  }
  return 'The student likes ES2015!';
}

export {
  createStudent,
};
