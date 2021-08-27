/*
 * @Author: yzh
 * @Date: 2020-12-28 16:08:33
 * @LastEditTime: 2021-08-26 15:13:26
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /demo-project/src/store/actionCreators.js
 */
import axios from 'axios';
import { INIT_TODOS, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, GET_TODOS_DATA, GET_CHART_DATA, INIT_CHART } from './actions';

export const getInitTodosAction = (todos) => ({
  type: INIT_TODOS,
  todos
});

export const getInitChartAction = (data) => ({
  type: INIT_CHART,
  data
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

// export const getInitTodos = () => {
//   return (dispatch) => {
//     axios.get('http://localhost:3100/posts')
//       .then((res) => {
//         dispatch(getInitTodosAction(res.data));
//       }).catch(() => {
//         alert('error');
//       });
//   };
// };

/**
 * @Description: 将异步操作放入action中 有利于做自动化测试 和 代码拆分管理
 * @param {*}
 * @return {*}
 */
// 使用thunk后 返回函数的action creater
export const getInitTodos = (dispatch) => {
  axios.get('http://localhost:3100/posts')
    .then((res) => {
      dispatch(getInitTodosAction(res.data));
    }).catch(() => {
      alert('error');
    });
};

export const getGetTodosDataAction = () => ({
  type: GET_TODOS_DATA
});

export const getGetChartDataAction = () => ({
  type: GET_CHART_DATA
});