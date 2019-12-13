
function parseMs(number) {
  const positiveNumber = Math.abs(number);
  const milliseconds = positiveNumber % (10 ** 3);
  let seconds = Math.floor(positiveNumber / 10 ** 3);
  let minutes = 0;
  let hours = 0;
  let days = 0;
  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60);
    seconds %= 60;
  }
  if (minutes >= 60) {
    hours = Math.floor(minutes / 60);
    minutes %= 60;
  }
  if (hours >= 24) {
    days = Math.floor(hours / 24);
    hours %= 24;
  }
  if (number > 0) {
    return {
      days, hours, minutes, seconds, milliseconds,
    };
  }
  return {
    days: -days, hours: -hours, minutes: -minutes, seconds: -seconds, milliseconds: -milliseconds,
  };
}


export {
  parseMs,
};
