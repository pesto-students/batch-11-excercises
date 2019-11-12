class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  toString(stringifier = (item) => item.toString()) {
    return this.items.map((item) => stringifier(item)).join(',');
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

export {
  Queue,
};
