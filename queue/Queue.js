class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(obj) {
    this.data = this.data.concat(obj);
  }

  dequeue() {
    return this.data.shift();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

export {
  Queue,
};
