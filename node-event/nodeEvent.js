const EventEmitter = require('events');

const nodeEvent = (message) => {
  console.log(`Hello ${message}`);
};

const GreetingEmitter = new EventEmitter();

GreetingEmitter.on('greet', nodeEvent);

export {
  GreetingEmitter,
};
