const invalidSpecialChar = () => {
  const reg = /[<>:"/\\|?*]/g;
  return reg;
};
const windowReservedNames = () => {
  const names = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;
  return names;
};

const validFilename = (string) => {
  if (!string || string.length > 255) {
    return false;
  }

  if (invalidSpecialChar().test(string) || windowReservedNames().test(string)) {
    return false;
  }

  if (/^\.\.?$/.test(string)) {
    return false;
  }

  return true;
};

export { validFilename };
