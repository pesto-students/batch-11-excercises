/* eslint-disable no-else-return */

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function daysInMonth(year, month) {
  if (month === 1) {
    return 31;
  } else if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  } else if (month === 3) {
    return 31;
  } else if (month === 4) {
    return 30;
  } else if (month === 5) {
    return 31;
  } else if (month === 6) {
    return 30;
  } else if (month === 7) {
    return 31;
  } else if (month === 8) {
    return 31;
  } else if (month === 9) {
    return 30;
  } else if (month === 10) {
    return 31;
  } else if (month === 11) {
    return 30;
  } else if (month === 12) {
    return 31;
  }
  return -1;
}

export {
  daysInMonth,
};
