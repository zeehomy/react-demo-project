/*
 * @Author: yzh
 * @Date: 2020-12-28 14:57:54
 * @LastEditTime: 2021-02-18 17:01:04
 * @LastEditors: yzh
 * @Description: 
 * @FilePath: /demo-project/src/store/actions.js
 */
// 建立actions文件是为了避免字符串的拼写错误带来难以查找的问题。使用变量可以更好的进行错误检查。
export const INIT_TODOS = 'init_todos';
export const CHANGE_INPUT_VALUE = 'change_input_value';
export const ADD_TODO_ITEM = 'add_todo_item';
export const DELETE_TODO_ITEM = 'delete_todo_item';