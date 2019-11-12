
class Cycled {
  constructor(numbers) {
    // console.log(numbers);
    this.numbers = numbers;
    this.pointer = 0;
  }

  get index() {
    return this.pointer;
  }

  // eslint-disable-next-line class-methods-use-this
  set index(param) {
    console.log(param);
  }

  current() {
    return this.numbers[this.pointer];
  }

  next() {
    this.pointer = (this.pointer + 1) % this.numbers.length;
    return this.numbers[this.pointer];
  }

  previous() {
    this.pointer = (this.pointer - 1 + this.numbers.length) % this.numbers.length;
    return this.numbers[this.pointer];
  }
  // Cycled.prototype.stepBackwards = function step(number) {
  //   const numbers = new Array(Math.abs(number));
  //   numbers.forEach(() => {
  //       this.previous();
  //   });
  //   return this.current();
  // };

  step(number) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < Math.abs(number); i++) {
      if (Math.sign(number) === -1) {
        this.previous();
      }
      this.next();
    }
    // numbers.forEach(() => {
    //   console.log('in the loop');
    //   if (Math.sign(number) === -1) {
    //     // this.previous();
    //     console.log(this.previous());
    //   } else {
    //     console.log(this.next());
    //   }
    // }, this);
    return this.current();
  }
}

export {
  Cycled,
};
