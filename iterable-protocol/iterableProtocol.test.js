describe('A simple iterable without items inside, implementing the right protocol', () => {
  function iteratorFunction() {
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        return { done: true };
      },
    };
  }

  describe('the `iteratorFunction` needs to comply to the iterator protocol', () => {
    it('must return an object', () => {
      expect(typeof iteratorFunction()).toBe('object');
    });
    it('the object must have a function assigned to a key `next`', () => {
      expect(typeof iteratorFunction().next).toBe('function');
    });
    it('calling `next()` must return an object with `{done: true}`', () => {
      expect(iteratorFunction().next()).toEqual({
        done: true,
      });
    });
  });

  let iterable;
  beforeEach(() => {
    iterable = iteratorFunction();
  });

  describe('the iterable', () => {
    it('must be an object', () => {
      expect(typeof iterable).toBe('object');
    });
    it('must have the iterator function assigned to the key `Symbol.iterator`', () => {
      expect(typeof iterable[Symbol.iterator]).toBe('function');
    });
  });

  describe('using the iterable', () => {
    it('it contains no values', () => {
      let values = '';
      for (const value of iterable) {
        values += value;
      }
      expect(values).toBe('');
    });

    it('has no `.length` property', () => {
      const hasLengthProperty = iterable.length !== undefined;
      expect(hasLengthProperty).toBe(false);
    });

    describe('can be converted to an array', () => {
      it('using `Array.from()`', () => {
        const arr = [...iterable];
        expect(Array.isArray(arr)).toBe(true);
      });

      it('where `.length` is still 0', () => {
        const arr = [...iterable];
        const {
          length,
        } = arr;
        expect(length).toBe(0);
      });
    });
  });
});
