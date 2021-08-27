/*
 * @Date: 2021-08-27 14:37:42
 * @LastEditTime: 2021-08-27 15:19:40
 * @Description: 
 * @FilePath: /demo-project/src/FunComponents/Hooks/useReducer.js
 */
import { useState } from 'react';

export function useReducer(initialState, reducer) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [
    state,
    dispatch
  ];
}