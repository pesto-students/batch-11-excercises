/* eslint-disable no-console */
/* eslint-disable quotes */

function bouncer(array) {
  const listOfFalsyValues = [false, null, undefined, 0, NaN, '', "", ``];
  for (let i = 0; i < array.length; i += 1) {
    if (listOfFalsyValues.includes(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
}

export {
  bouncer,
};
