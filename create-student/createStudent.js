
function createStudent({ likesJavaScript = true, likesES2015 = true } = {}) {
  const likesBoth = likesJavaScript && likesES2015;
  const likesOnlyJs = likesJavaScript && !likesES2015;
  const likesOnlyES2015 = !likesJavaScript && likesES2015;

  if (likesBoth) {
    return 'The student likes JavaScript and ES2015';
  }

  if (likesOnlyJs) {
    return 'The student likes JavaScript!';
  }

  if (likesOnlyES2015) {
    return 'The student likes ES2015!';
  }
  return 'The student does not like much...';
}

export {
  createStudent,
};
