function truthCheck(collection, check) {
  return collection.every(item => {
    return item[check];
  });
}

export { truthCheck };
