import { GreetingEmitter } from './nodeEvent';

describe('Greeting emitter', () => {
  test('should be an instanceof event', () => {
    expect(GreetingEmitter.constructor.name).toBe('EventEmitter');
  });
  test('should return text in correct format', () => {
    expect(GreetingEmitter.emit('greet', 'Meet')).toBe(true);
  });
});
