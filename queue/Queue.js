class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.unshift(value);
    return this.items;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  toString() {
    return this.items.reverse().join(',');
  }

  isEmpty() {
    return this.items.length > 0;
  }
}

export {
  Queue,
};
