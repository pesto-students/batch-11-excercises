import { deepCopyObject } from './deepCopyObject';

describe('deepCopyObject', () => {
  it('returns a deep copy of given object', () => {
    const myObj = {
      subObj: {
        key: 'value',
      },
    };

    const yourObj = deepCopyObject(myObj);

    yourObj.subObj.key = 'new value';

    expect(yourObj.subObj.key).toEqual('new value');
    expect(myObj.subObj.key).toEqual('value');
  });

  it('returns copy of other data types', () => {
    expect(deepCopyObject(4)).toEqual(4);
    expect(deepCopyObject('string!')).toEqual('string!');
    expect(deepCopyObject(true)).toBe(true);
    expect(deepCopyObject(null)).toBeNull();
  });
  // it('returns copy of array', () => {
  //   const array = [1, 2, 3, 4, 5];
  //   const array2 = deepCopyObject(array);
  //   array2[0] = 'a';
  //   array2[2] = 'b';
  //   expect(array[0].toEqual(1));
  //   expect(array[2].toEqual(3));
  // });
});
