import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

  // 函数式编程更适用于自动化测试

  // 一个组件中第一个执行的函数
  constructor(props) {
    super(props);

    this.state = {
      inputValue: 'hello',
      todoList: []
    };

    // 对于父组件，在内部bind，在复杂组件中会有性能损耗（子组件无差别）
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  // todoList渲染函数
  // 将JSX中的长逻辑抽离处理
  // ？函数组件需要属性（因为写在外面）
  // 函数调用适用于组件内运用state的渲染逻辑
  todoList() {
    return this.state.todoList.map((todoItem, index) => {
      return (
        <TodoItem key={index}
          todoItem={todoItem}
          index={index}
          handleClickDeleteProp={this.handleClickDelete}
        />
      );
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertInput">事项：</label>
          <input id="insertInput"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          {
            // 注释的另一种写法
          }
          <button onClick={this.handleClickSubmit}>提交</button>
        </div>
        <ul>
          {this.todoList()}
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // });

    // 保存value结果，供异步使用（在setState内直接访问target为空）
    const inputValue = e.target.value;

    // 新版setState提供函数方式
    this.setState(() => ({
      inputValue: inputValue
    }));
  }

  handleClickSubmit() {
    // this.setState({
    //   inputValue: '',
    //   todoList: [...this.state.todoList, this.state.inputValue]
    // });

    // prevState <=> this.state 可以避免this.state被无意改变
    this.setState((prevState) => ({
      inputValue: '',
      todoList: [...prevState.todoList, prevState.inputValue]
    }));
  }

  handleClickDelete(index) {

    // 若不bind，this将指向子组件的this.props (因为在子组件中为this.props调用)
    // console.log('TodoList', this);

    // 优化注释：可以将数据处理放入setState函数中
    // const todoList = [...this.state.todoList];
    // todoList.splice(index, 1);

    // this.setState({
    //   todoList: todoList
    // });

    this.setState((prevState) => {

      const todoList = [...prevState.todoList];
      todoList.splice(index, 1);

      return {
        todoList
      };

    });
  }
}

export default TodoList;