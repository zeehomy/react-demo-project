/*
 * @Author: yzh
 * @Date: 2020-11-09 15:36:56
 * @LastEditTime: 2021-04-09 09:46:41
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /demo-project/src/TodoList.js
 */
import React, { Component } from 'react';
import store from './store';
import TodoListUI from './TodoListUI';
import { 
  getInitTodos,
  getChangeInputValueAction,
  getAddTodoItemAction,
  getDeleteTodoItemAction
} from './store/actionCreators';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = store.getState();

    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  handleInputChange(e) {
    store.dispatch(getChangeInputValueAction(e.target.value));
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleClickSubmit() {
    store.dispatch(getAddTodoItemAction());
  }

  handelDeleteTodo(index) {
    store.dispatch(getDeleteTodoItemAction(index));
  }

  render() {
    const { inputValue, todos } = this.state;
    return (
      <TodoListUI inputValue={inputValue}
        todos={todos}
        handleInputChange={this.handleInputChange}
        handleClickSubmit={this.handleClickSubmit}
        handelDeleteTodo={this.handelDeleteTodo}
      />
    );
  }

  componentDidMount() {
    store.dispatch(getInitTodos);
  }
}

export default TodoList;