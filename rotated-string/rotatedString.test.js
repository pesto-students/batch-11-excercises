import { rotatedString } from './rotatedString';

describe('rotatedString', () => {
  it('rotatedString returns true for the given strings', () => {
    expect(rotatedString('abcde', 'cdeab')).toBeTruthy();
    expect(rotatedString('', '')).toBeTruthy();
    expect(rotatedString('123', '231'));
  });

  it('rotatedString returns false for the given strings', () => {
    expect(rotatedString('abcde', 'abdce')).toBeFalsy();
    expect(rotatedString('abcd', 'abc')).toBeFalsy();
    expect(rotatedString(123, 231)).toBeFalsy();
    expect(rotatedString(123, '231')).toBeFalsy();
  });
});
