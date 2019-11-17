import { arrayCubeRootToJson } from './arrayCubeRootToJson';

describe('arrayCubeRootToJson', () => {
  it('find cube root of every element of array and return it as A json', () => {
    expect(arrayCubeRootToJson([27, 64, 125])).toMatchObject({ '27': 3, '64': 4, '125': 5 });
    expect(arrayCubeRootToJson(['27', '64', '125', 1])).toMatchObject({ '27': 3, '64': 4, '125': 5, '1': 1 });
    expect(arrayCubeRootToJson([-1, 1, Infinity, 64, -64])).toMatchObject({ '-1': -1, '1': 1, 'Infinity': Infinity, '64': 4, '-64': -4 });
  });

  it('throw cases', () => {
    expect(() => { arrayCubeRootToJson({}) }).toThrow('argument must be an array');
    expect(() => { arrayCubeRootToJson(true) }).toThrow('argument must be an array');
    expect(() => { arrayCubeRootToJson([null, false]) }).toThrow('Array must contain numbers only');
    expect(() => { arrayCubeRootToJson(false) }).toThrow('argument must be an array');
    expect(() => { arrayCubeRootToJson(undefined) }).toThrow('argument must be an array');
    expect(() => { arrayCubeRootToJson([1, 2, 4, 'abc']) }).toThrow('Array must contain numbers only');
    expect(() => { arrayCubeRootToJson([1, 2.12, 4.44, 'abc']) }).toThrow('Array must contain numbers only');
  });
});
