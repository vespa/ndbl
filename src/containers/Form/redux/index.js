const TEST = 'test';

function test() {
  return {
    type: TEST,
  };
}

function reducer(state = { test: true }, action) {
  switch (action.type) {
    case TEST:
      return state;
    default:
      return state;
  }
}

export {
  test,
  reducer as form,
};
