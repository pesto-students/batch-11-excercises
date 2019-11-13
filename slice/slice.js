
function slice(from, to, input) {
  const letters = [];
  if (typeof input === 'string') {
    letters = input.split('');
  }
  if (Array.isArray(input)) {
    
  }
  return Error('input should be an array or a string');
}

export {
  slice,
};
