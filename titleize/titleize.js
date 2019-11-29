
function titleize(string) {
  const seperator = string.indexOf('-') !== -1 ? '-' : ' ';
  const strings = string.split(/[\s-]/);

  return strings.map((ele) => ele.charAt(0).toUpperCase() + ele.substring(1).toLowerCase()).join(seperator);
}

export {
  titleize,
};
