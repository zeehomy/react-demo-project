/*
 * @Author: yzh
 * @Date: 2020-11-10 11:14:26
 * @LastEditTime: 2021-08-26 15:28:17
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /demo-project/src/store/reducer.js
 */
import { INIT_TODOS, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_CHART } from './actions';

const defaultState = {
  inputValue: '',
  todos: [],
  chartOption: {
    series: [{
      data: [],
      type: 'bar'
    }]
  }
};

export default function reducer(state = defaultState, action) {

  switch (action.type) {
    case INIT_TODOS:
      return {
        ...state,
        todos: [...action.todos]
      };

    case INIT_CHART:
      return {
        ...state,
        chartOption: {
          series: [
            {
              data: [...action.data],
              type: 'bar'
            }
          ]
        }
      };

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