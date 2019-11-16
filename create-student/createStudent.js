
function createStudent(likesObj) {
  let studentLikes = 'The student ';
  if (likesObj) {
    const { likesJavaScript, likesES2015 } = likesObj;
    if (likesJavaScript === false && likesES2015 === false) {
      studentLikes += 'does not like much...';
    } else if (likesES2015 === false) {
      studentLikes += 'likes JavaScript!';
    } else if (likesJavaScript === false) {
      studentLikes += 'likes ES2015!';
    }
  } else {
    studentLikes += 'likes JavaScript and ES2015';
  }
  return studentLikes;
}

export {
  createStudent,
};
