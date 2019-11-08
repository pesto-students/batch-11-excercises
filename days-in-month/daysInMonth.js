function daysInMonth(year, month) {
  const nextMonth = new Date(year, month);
  const requiredMonth = new Date(year, month - 1);
  return (nextMonth.getTime() - requiredMonth.getTime()) / 86400000;
}

export {
  daysInMonth,
};
