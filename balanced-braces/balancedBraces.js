
// not made for objects
// simple mostly for charactes
class Stack {
  constructor() {
    this.list = [];
  }

  push(item) {
    this.list.push(item);
  }

  forEach(cb) {
    const copiedArray = [...this.list];
    copiedArray.reverse().forEach(cb);
  }

  pop() {
    return this.list.pop();
  }

  isEmpty() {
    return this.list.length === 0;
  }
}

function isBracket(character) {
  return character === '[' || character === ']' || character === '{' || character === '}'
  || character === '(' || character === ')';
}

function isClosingBracket(brace1, brace2) {
  return (brace1 === '[' && brace2 === ']') || (brace1 === '{' && brace2 === '}')
  || (brace1 === '(' && brace2 === ')');
}

function balancedBraces(expression) {
  const stack1 = new Stack();
  const stack2 = new Stack();

  expression.split('').forEach((char) => {
    if (isBracket(char)) {
      stack1.push(char);
    }
  });

  stack1.forEach((bracket) => {
    const bracketCopied = stack2.pop();
    if (isClosingBracket(bracket, bracketCopied)) {
      stack1.pop();
    } else {
      if (bracketCopied) {
        stack2.push(bracketCopied);
      }
      stack2.push(stack1.pop());
    }
  });

  return stack1.isEmpty() && stack2.isEmpty();
}

export {
  balancedBraces,
};
