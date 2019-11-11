
function parseMs(ms) {
  const MINUTE_IN_SECONDS = 60;
  const HOUR_IN_MINUTES = 60;
  const DAY_IN_HOURS = 24;

  let milliseconds = Math.abs(ms);

  let seconds = Math.floor(milliseconds / 1000);
  milliseconds = milliseconds % 1000;
  let minutes = Math.floor(seconds / MINUTE_IN_SECONDS);
  seconds = seconds % MINUTE_IN_SECONDS;
  let hours = Math.floor(minutes / HOUR_IN_MINUTES);
  minutes = minutes % HOUR_IN_MINUTES;
  let days = Math.floor(hours / DAY_IN_HOURS);
  hours = hours % DAY_IN_HOURS;

  if (ms < 0) {
    return {
      days: -days,
      hours: -hours,
      minutes: -minutes,
      seconds: -seconds,
      milliseconds: -milliseconds
    }
  }
  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  }
}

export {
  parseMs,
};
