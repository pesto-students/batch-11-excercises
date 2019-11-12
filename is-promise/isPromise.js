import { type } from "os";

function isPromise(getPromise) {
  return getPromise ? typeof getPromise.then === 'function' : false;
}

export {
  isPromise,
};
