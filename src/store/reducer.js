import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actions';
const defaultState = {
  inputValue: '',
  todos: []
}

export default function reducer (state = defaultState, action) {

  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value
      };

    case ADD_TODO_ITEM:
      return {
        inputValue: '',
        todos: [...state.todos, state.inputValue]
      };

    case DELETE_TODO_ITEM:

      let todosArr = [...state.todos];
      todosArr.splice(action.index, 1);
      return {
        ...state,
        todos: todosArr
      };

    default:
      return state;
  }

}