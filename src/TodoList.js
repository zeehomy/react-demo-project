import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store';
import 'antd/dist/antd.css';
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actions';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = store.getState();

    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  handleInputChange(e) {

    store.dispatch({
      type: CHANGE_INPUT_VALUE,
      inputValue: e.target.value
    });
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleClickSubmit() {
    store.dispatch({
      type: ADD_TODO_ITEM,
      todoItem: this.state.inputValue
    });
  }

  handelDeleteTodo(index) {
    store.dispatch({
      type: DELETE_TODO_ITEM,
      index
    });
  }

  render() {
    return (
      <div>
        <Input placeholder="Basic usage"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Button type="primary"
          onClick={this.handleClickSubmit}
        >提交</Button>
        <List
          bordered
          dataSource={this.state.todos}
          renderItem={(item, index) => (
            <List.Item onClick={this.handelDeleteTodo.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoList;