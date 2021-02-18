/*
 * @Author: yzh
 * @Date: 2020-11-09 15:36:56
 * @LastEditTime: 2021-02-18 18:18:05
 * @LastEditors: yzh
 * @Description: 
 * @FilePath: /demo-project/src/TodoList.js
 */
import React, { Component } from 'react';
import axios from 'axios';
import store from './store';
import TodoListUI from './TodoListUI';
import { getInitTodosAction, getChangeInputValueAction, getAddTodoItemAction, getDeleteTodoItemAction } from './store/actionCreators';

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
    axios.get('http://localhost:3100/posts')
      .then((res) => {
        store.dispatch(getInitTodosAction(res.data));
      })
      .catch(() => {
        alert('error');
      });
  }
}

export default TodoList;