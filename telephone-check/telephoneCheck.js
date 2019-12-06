
function telephoneCheck(string) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(string);
}

export {
  telephoneCheck,
};
