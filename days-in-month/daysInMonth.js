function daysInMonth(receivedYear, receivedMonth) {
  return new Date(receivedYear, receivedMonth, 0).getDate();
}

export { daysInMonth };
