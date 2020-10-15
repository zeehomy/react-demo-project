import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Test from './Test';

class TodoList extends Component {

  // 1. 单项数据流
  // 2. react：一个视图层的框架。复杂项目复杂组件数据传递需要借助flux、redux、mbox等框架协助
  // 3. 函数式编程 更适用于自动化测试
  // 4. 当组件的state和props改变时，render函数会重新执行
  // 5. 当父组件的render函数执行时，子组件的render函数会重新执行
  // 6. react diff 同层比较。当节点不同时，子节点不再比较直接删掉一同替换。简化diff算法复杂程度
  // 7. 同时多次setState, react会整理为一次统一进行，减少比对次数

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
          todoList={this.state.todoList}
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
        <Test content={this.state.inputValue} />
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