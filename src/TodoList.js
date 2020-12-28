import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store';
import 'antd/dist/antd.css';
import { getChangeInputValueAction, getAddTodoItemAction, getDeleteTodoItemAction } from './store/actionCreators';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = store.getState();

    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
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