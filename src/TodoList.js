import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store';
import 'antd/dist/antd.css';

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = store.getState();
  }

  handleInputChange(e) {

    store.dispatch({
      type: 'change_input_value',
      inputValue: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Input placeholder="Basic usage"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Button type="primary">提交</Button>
        <List
          bordered
          dataSource={this.state.todos}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoList;