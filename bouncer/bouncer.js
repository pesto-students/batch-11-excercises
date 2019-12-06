
function bouncer(members) {
  return members.filter(isTruthy);
}

function isTruthy(element) {
  return Boolean(element);
}

export {
  bouncer,
};
