
function telephoneCheck(string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(string);
}

export {
  telephoneCheck,
};
