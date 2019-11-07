
function bouncer(arrayWithFalsyValues) {
  const falsyValues = [false, null, 0, NaN, undefined, ''];
  const arrayWithoutFalsyValues = [];
  for (let i = 0; i < arrayWithFalsyValues.length; i += 1) {
    if (!falsyValues.includes(arrayWithFalsyValues[i])) {
      arrayWithoutFalsyValues.push(arrayWithFalsyValues[i]);
    }
  }
  return arrayWithoutFalsyValues;
}

export {
  bouncer,
};
