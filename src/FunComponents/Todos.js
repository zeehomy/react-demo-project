/*
 * @Date: 2021-08-27 14:05:07
 * @LastEditTime: 2021-08-27 15:20:21
 * @Description: 
 * @FilePath: /demo-project/src/FunComponents/Todos.js
 */
import React from 'react';
import { useReducer } from './Hooks/useReducer'

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];

    case 'delete':
      let todosArr = [...state];
      todosArr.splice(action.index, 1);
      return todosArr;
    // ... other actions ...
    default:
      return state;
  }
}

function Todos({ content = '' }) {

  const [state, dispatch] = useReducer([], reducer);

  function handleAddClick() {
    dispatch({ type: 'add' });
  }

  function handelDeleteTodo(index) {
    dispatch({ type: 'delete', index });
  }

	return (
		<div>
      <button type="primary"
        onClick={handleAddClick}
      >提交</button>
      <ul>
        {
          state.map((item, index) => {
            return (
              <li onClick={() => {handelDeleteTodo(index)}}>
                {item}
              </li>
            );
          })
        }
      </ul>
    </div>
	);
}

export default Todos;