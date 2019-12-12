
class Cycled {
  constructor(items) {
    this.items = items;
    this.currentIndex = 0;
  }

  get index() {
    return this.currentIndex;
  }

  set index(newIndex) {
    if (newIndex > 0) {
      this.currentIndex = newIndex;
    }
  }

  current() {
    return this.items[this.currentIndex];
  }

  next() {
    if (this.currentIndex === this.items.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
    const nextItem = this.items[this.currentIndex];
    return nextItem;
  }

  previous() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.items.length - 1;
    } else {
      this.currentIndex = this.currentIndex - 1;
    }
    return this.items[this.currentIndex];
  }

  step(numStep) {
    this.currentIndex = this.currentIndex + numStep;
    if (this.currentIndex >= this.items.length) {
      this.currentIndex %= this.items.length;
    }
    return this.items[this.currentIndex];
  }

  reversed() {
    const reversedItem = this.items.reverse();
    return new Cycled(reversedItem);
  }
}

export {
  Cycled,
};
