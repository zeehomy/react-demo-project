const defaultState = {
  inputValue: '123',
  todos: [1, 2]
}

export default function reducer (state = defaultState, action) {
  // switch (action.type) {
  //   case 'INCREMENT':
  //     return state + 1;
  //   case 'DECREMENT':
  //     return state - 1;
  //   default:
  //     return state;
  // }

  return state;
}