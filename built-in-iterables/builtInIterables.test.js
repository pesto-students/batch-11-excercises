describe('Array is a built-in iterable object', () => {
  const arr = ['a', 'B', 'see'];

  describe('the iterator', () => {
    it('an array has an iterator, which is a function', () => {
      const iterator = arr[Symbol.iterator];
      const theType = typeof iterator;

      expect(theType).toBe('function');
    });

    it('can be looped with `for-of`, which expects an iterable', () => {
      let count = 0;
      for (const value of arr) {
        count += 1;
      }

      expect(count).toBe(arr.length);
    });
  });

  describe('the iterator protocol', () => {
    it('calling `next()` on an iterator returns an object according to the iterator protocol', () => {
      const iterator = arr[Symbol.iterator]();
      const firstItem = iterator.next();

      expect(firstItem).toEqual({
        done: false,
        value: 'a',
      });
    });


    it('the after-last element has done=true', () => {
      const array = [];
      const iterator = array[Symbol.iterator]();
      const afterLast = iterator.next();

      expect(afterLast).toEqual({
        done: true,
        value: undefined,
      });
    });
  });
});

describe('string is a built-in iterable object', () => {
  const string = 'abc';

  describe('string is iterable', () => {
    it('the string`s object key `Symbol.iterator` is a function', () => {
      const stringIterator = string[Symbol.iterator];
      expect(typeof stringIterator).toBe('function');
    });

    it('use `Array.from()` to make an array out of any iterable', () => {
      const arr = Array.from(string);
      expect(arr).toEqual(['a', 'b', 'c']);
    });
  });

  describe('a string`s iterator', () => {
    let iterator;
    beforeEach(() => {
      iterator = string[Symbol.iterator]();
    });

    it('has a special string representation', () => {
      const description = iterator.toString();

      expect(description).toBe('[object String Iterator]');
    });

    it('`iterator.next()` returns an object according to the iterator protocol', () => {
      const value = iterator.next();
      expect(value).toEqual({
        done: false,
        value: 'a',
      });
    });

    it('the after-last call to `iterator.next()` says done=true, no more elements', () => {
      iterator.next();
      iterator.next();
      iterator.next();
      expect(iterator.next().done).toBe(true);
    });
  });
});
