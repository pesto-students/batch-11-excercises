function bouncer(pollutedArray) {
  let pollution = ["", null, false, NaN, undefined, 0];
  let cleanArray = [];
  for (let i = 0; i < pollutedArray.length; i++) {
    let item = pollutedArray[i];
    if (!pollution.includes(item)) {
      cleanArray.push(item);
    }
  }
  return cleanArray;
}

export { bouncer };
