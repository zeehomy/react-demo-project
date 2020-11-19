const defaultState = {
  inputValue: '123',
  todos: [1, 2]
}

export default function reducer (state = defaultState, action) {

  switch (action.type) {
    case 'change_input_value':
      return {
        ...state,
        inputValue: action.inputValue
      };
    default:
      return state;
  }

}