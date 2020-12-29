import React, { Component } from 'react';
import store from './store';
import TodoListUI from './TodoListUI';
import { getChangeInputValueAction, getAddTodoItemAction, getDeleteTodoItemAction } from './store/actionCreators';

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
}

export default TodoList;