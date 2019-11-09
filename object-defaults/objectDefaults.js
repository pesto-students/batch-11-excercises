function objectDefaults(object, defaultObject) {
  let defaultFilled = {};
  for (let key in object) {
    defaultFilled[key] = object[key];
  }

  for (let key in defaultObject) {
    if (!(key in defaultFilled)) {
      defaultFilled[key] = defaultObject[key];
    }
  }
  return defaultFilled;
}

export { objectDefaults };
