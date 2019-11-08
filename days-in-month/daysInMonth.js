function isLeapYear(year) {
  return !(year / 4 === 0 && year / 100 === 0 && year / 400 === 0);
}

function daysInMonth(year, month) {
  let days = 0;
  if (month % 2 !== 0) {
    days = 31;
  } else if (month === 2 && isLeapYear(year)) {
    days = 29;
  } else if (month === 2 && !isLeapYear(year)) {
    days = 28;
  } else {
    days = 30;
  }
  return days;
}

export {
  daysInMonth,
};
