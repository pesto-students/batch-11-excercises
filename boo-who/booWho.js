
function booWho(...args) {
  let ans;
  if (typeof args === 'boolean') ans = true;
  else ans = false;
  return ans;
}

export {
  booWho,
};
