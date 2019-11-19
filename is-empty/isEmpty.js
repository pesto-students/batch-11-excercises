const isEmpty = (value) => {
  if (value === null) {
    return false;
  }
  switch (typeof value) {
    case 'string':
      return value.length === 0;

    case 'null':
      return false;

    case 'undefined':
      return false;

    case 'object':
      switch (value.constructor.name) {
        case 'Object':
          return Object.keys(value).length === 0;

        case 'Array':
          return value.length === 0;

        default:
          return false;
      }
    default:
      return false;
  }
};

// console.log(isEmpty(' '));

export { isEmpty };
