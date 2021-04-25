import React, { Component, Fragment } from 'react';
import axios from 'axios';
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
  // 8. 生命周期周期函数指组件在某一时刻自动调用执行的函数
  // 9. ff

  // 一个组件中第一个执行的函数
  constructor(props) {
    console.log('constructor');
    super(props);

    this.state = {
      inputValue: 'hello',
      todoList: []
    };

    // 对于父组件，在内部bind，在复杂组件中会有性能损耗（子组件无差别）
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);

    // this.inputElement = null;
  }

  // 不建议使用ref方式操作数据，如果有异步操作ref可能更新不够及时（可在回调中使用）；建议使用单向数据流驱动
  inputElement = null;

  // todoList渲染函数
  // 将JSX中的长逻辑抽离处理
  // ？函数组件需要属性（因为写在外面）
  // 函数调用适用于组件内运用state的渲染逻辑
  todoList() {
    return this.state.todoList.map((todoItem, index) => {
      return (
        <TodoItem key={todoItem}
          todoItem={todoItem}
          index={index}
          todoList={this.state.todoList}
          handleClickDeleteProp={this.handleClickDelete}
        />
      );
    })
  }

  UNSAFE_componentWillMount() {
    console.log('TodoList UNSAFE_componentWillMount');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('todoList getDerivedStateFromProps', state);
    return null;
  }

  render() {
    console.log('TodoList render');
    return (
      <Fragment>
        <div>
          <label htmlFor="insertInput">事项：</label>
          <input ref={(element) => {this.inputElement = element;}}
            id="insertInput"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          {
            // 注释的另一种写法
          }
          <button onClick={this.handleClickSubmit}>提交</button>
        </div>
        <ul ref={(element) => {this.ulElement = element;}}>
          {this.todoList()}
        </ul>
        <Test />
      </Fragment>
    )
  }

  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // });

    // 保存value结果，供异步使用（在setState内直接访问target为空）
    // const inputValue = e.target.value;
    const inputValue = this.inputElement.value;

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
    }), () => {

      // 第二个参数将在 setState 完成合并并重新渲染组件后执行。通常建议使用 componentDidUpdate() 来代替此方式.
      // https://zh-hans.reactjs.org/docs/react-component.html#setstate
      // console.log(this.ulElement.querySelectorAll('li').length);
    });

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

  componentDidMount() {

    // 即使render中没有访问state，render也会执行
    // setTimeout(() => {
      
    //   this.setState(() => ({
    //     inputValue: 'inputValue'
    //   }));
    // }, 2000);

    axios.get('http://localhost:3100/posts')
      .then((res) => {
        console.log(res.data);

        this.setState(() => ({
          todoList: [...res.data]
        }));
      })
      .catch(() => {
        alert('error');
      });
  }

  shouldComponentUpdate(nextProps, nextState) {

    // 返回false时，state也可能已经改变但是视图没变，容易产生bug。
    // 通常通过判断state是否改变，决定是否返回true。
    // this.state.todoList为之前的状态；nextState为改变后的状态
    console.log('todolist shouldComponentUpdate', this.state.todoList);
    return true;
  }
}

export default TodoList;