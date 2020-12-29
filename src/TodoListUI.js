import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

class TodoListUI extends Component {

  render() {

    const {inputValue, handleInputChange, handleClickSubmit, todos, handelDeleteTodo} = this.props;

    return (
      <div>
        <Input placeholder="Basic usage"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button type="primary"
          onClick={handleClickSubmit}
        >提交</Button>
        <List
          bordered
          dataSource={todos}
          renderItem={(item, index) => (
            <List.Item onClick={() => {handelDeleteTodo(index)}}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoListUI;