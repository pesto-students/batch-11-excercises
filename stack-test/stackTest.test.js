/**
 * Pass the test below and then complete 100% coverage
 */

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  getLength() {
    return this.count;
  }

  push(item) {
    this.items.push(item);
    this.count = this.count + 1;
  }

  pop() {
    if (this.count > 0) {
      this.count = this.count - 1;
    }

    return this.items.pop();
  }

  // returns top element in the stack
  peek() {
    return this.items.slice(-1)[0];
  }
}

describe('stack test', () => {
  let myStack;
  beforeEach(() => {
    myStack = new Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
  });

  test('should push elements to stack in order', () => {
    const actual = myStack.items;
    const expected = [1,2,3];

    expect(actual).toEqual(expected);
  });

  test('should pop element from the stack in proper order', () => {
    const actual = myStack.pop();
    const expected = 3;

    const actualArray = myStack.items;
    const expectedArray = [1,2]

    expect(actual).toEqual(expected);
    expect(actualArray).toEqual(expectedArray);

  });

  test('should peek element from stack ', () => {
    const actual = myStack.peek();
    const expected = 3;

    const actualArray = myStack.items;
    const expectedArray = [1,2,3]

    expect(actual).toEqual(expected);
    expect(actualArray).toEqual(expectedArray);
  });

  test('should get the length of stack', () => {
    const actual = myStack.getLength();
    const expected = 3;

    expect(actual).toEqual(expected);
  });
});
