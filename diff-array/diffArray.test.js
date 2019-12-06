import { getArrayDifference } from './diffArray';

describe('getArrayDifference', () => {
  test('should return an array', () => {
    expect(Array.isArray(getArrayDifference([1, 2, 3, 5], [1, 2, 3, 4, 5]))).toBe(true);
  });
  test('should return the correct expected array', () => {
    expect(getArrayDifference(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']))
      .toEqual(['pink wool']);

    expect(getArrayDifference(['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']))
      .toEqual([]);

    expect(getArrayDifference([1, 2, 3, 5], [1, 2, 3, 4, 5]))
      .toEqual([4]);

    expect(getArrayDifference([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]))
      .toEqual(['piglet', 4]);

    expect(getArrayDifference([], ['snuffleupagus', 'cookie monster', 'elmo']))
      .toEqual(['snuffleupagus', 'cookie monster', 'elmo']);

    expect(getArrayDifference([1, 'calf', 3, 'piglet'], [7, 'filly']))
      .toEqual([1, 'calf', 3, 'piglet', 7, 'filly']);
  });
});
