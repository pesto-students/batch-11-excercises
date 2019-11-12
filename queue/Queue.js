
class Queue {
  constructor() {
    this.linkedList = [];
  }

  enqueue(value) {
    this.linkedList.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    } else {
      const removedValue = this.linkedList.shift();
      return removedValue;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      const START = 0;
      return this.linkedList[START];
    }
  }

  isEmpty() {
    return this.linkedList.length === 0;
  }

  toString(formatter) {
    if (typeof formatter === 'function') {
      let formattedData = [];
      for (let value of this.linkedList) {
        formattedData.push(formatter(value));
      }
      return formattedData.join(',');
    } else {
      return this.linkedList.toString();
    }
  }
}

export {
  Queue,
};
