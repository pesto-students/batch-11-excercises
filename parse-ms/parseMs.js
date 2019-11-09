
function isNegative(number) {
  return number / -1 === 1;
}

function parseMs(totalMilliseconds) {
  const absoluteMilliseconds = Math.abs(totalMilliseconds);
  const sign = isNegative(totalMilliseconds) ? -1 : 1;
  // const absoluteMilliseconds = totalMilliseconds;
  const oneSecondMilliseconds = 1000;
  const oneMinuteMilliseconds = 60 * oneSecondMilliseconds;
  const oneHourMilliseconds = 60 * oneMinuteMilliseconds;
  const oneDayMilliseconds = 24 * oneHourMilliseconds;
  const days = sign * (Math.floor(absoluteMilliseconds / oneDayMilliseconds));
  const hours = sign * (Math.floor((absoluteMilliseconds % oneDayMilliseconds)
   / oneHourMilliseconds));
  const minutes = sign * (Math.floor((absoluteMilliseconds % oneHourMilliseconds)
   / oneMinuteMilliseconds));
  const seconds = sign * (Math.floor((absoluteMilliseconds % oneMinuteMilliseconds)
   / oneSecondMilliseconds));
  const milliseconds = sign * (Math.floor((absoluteMilliseconds % oneSecondMilliseconds)));

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
}

export {
  parseMs,
};
