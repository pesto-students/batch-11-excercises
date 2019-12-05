
function createStudent(...args) {
  if (args.length === 0) {
    return 'The student likes JavaScript and ES2015';
  }
  const { likesES2015, likesJavaScript } = args[0];
  if (likesES2015 === false && likesJavaScript === undefined) {
    return 'The student likes JavaScript!';
  }
  if (likesJavaScript === false && likesES2015 === undefined) {
    return 'The student likes ES2015!';
  }
  return 'The student does not like much...';
}

export {
  createStudent,
};
