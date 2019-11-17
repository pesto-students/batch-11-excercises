
function greet(greetString) {
  return new Promise((resolve, reject) => {
    if (typeof greetString !== 'string') reject(new Error('Input type must be a string'));
    else resolve(`Hey ${greetString}`);
  });
}

export {
  greet,
};
