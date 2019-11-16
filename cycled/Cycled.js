
class Cycled {
  constructor(numbers) {
    // console.log(numbers);
    this.numbers = numbers;
    this.pointer = 0;
    // this.nextNumberIterator = this.getNextIterable()[Symbol.iterator]();
    // this.previousNumberIterator = this.getPreviousIterable()[Symbol.iterator]();
    this.stepperIterator = this.getStepperIterable()[Symbol.iterator]();
  }

  // // eslint-disable-next-line class-methods-use-this
  // getNextIterable() {
  //   return {
  //     [Symbol.iterator]() {
  //       return {
  //         next() {
  //           this.pointer += 1;
  //           if (this.pointer >= this.numbers.length) {
  //             this.pointer = 0;
  //           }
  //           return {
  //             value: this.numbers[this.pointer],
  //             done: false,
  //           };
  //         },
  //       };
  //     },
  //   };
  // }

  // // eslint-disable-next-line class-methods-use-this
  // getPreviousIterable() {
  //   return {
  //     [Symbol.iterator]() {
  //       return {
  //         next() {
  //           this.pointer -= 1;
  //           if (this.pointer < 0) {
  //             this.pointer = this.pointer + this.numbers.length;
  //           }
  //           return {
  //             value: this.numbers[this.pointer],
  //             done: false,
  //           };
  //         },
  //       };
  //     },
  //   };
  // }

  // eslint-disable-next-line class-methods-use-this
  getStepperIterable() {
    return {
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
      },
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


  // eslint-disable-next-line class-methods-use-this
  reversed() {
    this.reversedObject = {
      step(byNumber) {
        return this.stepperIterator.next.call(this, -1 * byNumber).value;
      },
      next() {
        return this.stepperIterator.next.call(this, -1).value;
      },
      previous() {
        return this.stepperIterator.next.call(this, 1).value;
      },
    };
    this.reversedObject.next = this.reversedObject.next.bind(this);
    return this.reversedObject;
  }
}

export {
  Cycled,
};
