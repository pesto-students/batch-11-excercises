
class Queue {
  constructor() {
    this.queue = [];
    this.start = 0;
    this.end = 0;
  }

  enqueue(obj) {
    this.queue = this.queue.concat(obj);
  }

  dequeue() {
    const dequeueObj = this.queue[0] ? this.queue[0] : null;
    this.queue = this.queue.slice(1);
    return dequeueObj;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    return this.queue[0] ? this.queue[0] : null;
  }

  toString(stringifier = (item) => item.toString()) {
    return this.queue.map((item) => stringifier(item)).join(',');
  }
}

export {
  Queue,
};
