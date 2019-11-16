
class Cycled {
  constructor(numbers) {
    // console.log(numbers);
    this.numbers = numbers;
    this.pointer = 0;
    // this.nextNumberIterator = this.getNextIterable()[Symbol.iterator]();
    // this.previousNumberIterator = this.getPreviousIterable()[Symbol.iterator]();
    this.stepperIterator = this.getStepperIterable()[Symbol.iterator]();
    this[Symbol.iterator] = this[Symbol.iterator].bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  [Symbol.iterator]() {
    return {
      next(step) {
        this.pointer += step;
        if (this.pointer < 0) {
          this.pointer = this.pointer + this.numbers.length;
        }
        if (this.pointer >= this.numbers.length) {
          this.pointer = 0;
        }
        return {
          value: this.numbers[this.pointer],
          done: false,
        };
      },
    };
  }

  getStepperIterable() {
    return {
      [Symbol.iterator]: this[Symbol.iterator],
    };
  }

  step(byNumber) {
    return this.stepperIterator.next.call(this, byNumber).value;
  }

  next() {
    return this.stepperIterator.next.call(this, 1).value;
  }

  previous() {
    return this.stepperIterator.next.call(this, -1).value;
  }

  current() {
    return this.numbers[this.pointer];
  }

  set index(indexValue) {
    if (indexValue < this.numbers.length && indexValue >= 0) {
      this.pointer = indexValue;
    }
  }

  get index() {
    return this.pointer;
  }

  indexOf(searchValue) {
    return this.numbers.indexOf(searchValue);
  }

  // eslint-disable-next-line class-methods-use-this
  reversed() {
    const reversedObject = {
      step: (byNumber) => this.stepperIterator.next.call(this, byNumber).value,
      next: () => this.stepperIterator.next.call(this, -1),
      previous: () => this.stepperIterator.next.call(this, 1),
    };
    return reversedObject;
  }
}

export {
  Cycled,
};
