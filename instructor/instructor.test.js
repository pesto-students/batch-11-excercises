import { instruct } from './instructor';

describe('instructor', () => {
  test('should change this.firstName to Ram', () => {
    instruct.sayHi();
    setTimeout(() => {
      expect(instruct.firstName).toBe('Ram');
    }, 1000);
  });
});
