import { squareNumbersArray } from './squareNumbersArray';

describe('squareNumbersArray', () => {
  test('should throw an error if array of numbers is not passed as argument', () => {
    const myArray = [1, 2, 'string', 4];
    expect(() => squareNumbersArray(...myArray)).toThrow('Each item should be of type number');
  });
  test('should return square array', () => {
    const myArray2 = [1, 2, 6, 16, 25];
    expect(() => squareNumbersArray(...myArray2)).toBeTruthy();
  });
});
