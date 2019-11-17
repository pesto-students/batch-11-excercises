import { ackermann } from './ackermann';

describe('Ackermann Function', () => {
  test('should return the correct output according to ackermann function', () => {
    expect(ackermann({ m: 0, n: 8 })).toBe(9);
    expect(ackermann({ m: 1, n: 0 })).toBe(2);
    expect(ackermann({ m: 3, n: 4 })).toBe(125);
  });
  test('should throw error on incorrect input', () => {
    expect(() => { ackermann({ m: -1, n: -1 }) }).toThrow('m or n must be positive integer numbers');
    expect(() => { ackermann({ m: -1, n: 1 }) }).toThrow('m or n must be positive integer numbers');
    expect(() => { ackermann({ m: 1, n: -1 }) }).toThrow('m or n must be positive integer numbers');
  })
});
