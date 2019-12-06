import { rotatedString } from './rotatedString';

describe('rotatedString', () => {
  it('rotatedString returns true for the given strings', () => {
    expect(rotatedString('abcde', 'cdeab')).toBe(true);
  });

  it('rotatedString returns false for the given strings', () => {
    expect(rotatedString('abcde', 'abcde')).toBe(false);
  });
});
