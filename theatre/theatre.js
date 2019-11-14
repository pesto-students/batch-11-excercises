function theatre(theatreQueue) {
  let balance = 0;
  for (let i = 0; i < theatreQueue.length; i += 1) {
    const ele = theatreQueue[i];
    if (ele > 10) {
      if ((ele - 10) <= balance) {
        balance -= ele - 10;
      } else {
        return false;
      }
    } else {
      balance += ele;
    }
    console.log(balance);
  }
  return true;
}

export {
  theatre,
};
