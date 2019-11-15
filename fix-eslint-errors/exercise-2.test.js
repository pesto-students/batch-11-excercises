function noop() {}

if (typeof console === 'undefined') {
  global.console = {
    warn: noop,
    error: noop,
  };
}


let asserted;


function containsMsg(arg) {
  return arg.toString().indexOf(arg) > -1;
}

// eslint-disable-next-line no-unused-vars
function createCompareFn(spy) {
  const hasWarned = () => {
    let count = spy.calls.count() - 1;
    let args;
    while (count) {
      args = spy.calls.argsFor(count);
      if (args.some(containsMsg)) {
        return true;
      }
      count -= 1;
    }
    return args;
  };

  return {
    compare: (msg) => {
      asserted = asserted.concat(msg);
      const warned = Array.isArray(msg)
        ? msg.some(hasWarned)
        : hasWarned(msg);
      return {
        pass: warned,
        message: warned
          ? `Expected message "${msg}" not to have been warned`
          : `Expected message "${msg}" to have been warned`,
      };
    },
  };
}

const spyOn = (arg1, arg2) => ({ arg1, arg2 });

// define custom matcher for warnings
beforeEach(() => {
  asserted = [];
  spyOn(console, 'warn');
  spyOn(console, 'error');
});

afterEach((done) => {
  const warned = (msg) => asserted.some((assertedMsg) => msg.toString().indexOf(assertedMsg) > -1);
  const count = warned.calls.count() - 1;
  let args;
  while (count) {
    args = args.calls.argsFor(count);
    if (!warned(args[0])) {
      done.fail(`Unexpected console.error message: ${args[0]}`);
      return;
    }
  }
  done();
});
