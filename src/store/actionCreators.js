/*
 * @Author: yzh
 * @Date: 2020-12-28 16:08:33
 * @LastEditTime: 2021-03-03 17:16:55
 * @LastEditors: yzh
 * @Description: 
 * @FilePath: /demo-project/src/store/actionCreators.js
 */
import axios from 'axios';
import { INIT_TODOS, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actions';

export const getInitTodosAction = (todos) => ({
  type: INIT_TODOS,
  todos
});

export const getChangeInputValueAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddTodoItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteTodoItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
});

export const getInitTodos = () => {
  return (dispatch) => {
    axios.get('http://localhost:3100/posts')
      .then((res) => {
        dispatch(getInitTodosAction(res.data));
      }).catch(() => {
        alert('error');
      });
  };
};