import { findLongestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  test('should return a number', () => {
    expect(typeof findLongestWordInString('some hello')).toBe('number');
  });
  test('should return the correct solution', () => {
    expect(findLongestWordInString('The quick brown fox jumped over the lazy dog')).toBe(6);
    expect(findLongestWordInString('May the force be with you')).toBe(5);
    expect(findLongestWordInString('What if we try a super-long word such as otorhinolaryngology')).toBe(19);
  });
});
