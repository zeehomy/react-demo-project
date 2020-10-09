import React, { Component, Fragment } from 'react'; 
import TodoItem from './TodoItem';

class TodoList extends Component {

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

    const inputValue = e.target.value;
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
    const todoList = [...this.state.todoList];
    todoList.splice(index, 1);
    this.setState({
      todoList: todoList
    });
  }
}

export default TodoList;