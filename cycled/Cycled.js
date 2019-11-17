
class Cycled {
  constructor(array) {
    this.array = array;
    this.currentIndex = 0;
  }

  get index() {
    return this.currentIndex;
  }

  next() {
    if (this.currentIndex === this.array.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
    return this.array[this.currentIndex];
  }

  current() {
    return this.array[this.currentIndex];
  }

  previous() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.array.length - 1;
    } else {
      this.currentIndex -= 1;
    }
    return this.array[this.currentIndex];
  }

  step(number) {
    return this.array[this.currentIndex + number];
  }
}

export {
  Cycled,
};
