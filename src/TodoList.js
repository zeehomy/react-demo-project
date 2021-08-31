/*
 * @Author: yzh
 * @Date: 2020-11-09 15:36:56
 * @LastEditTime: 2021-08-31 14:05:48
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /demo-project/src/TodoList.js
 */
import React, { Component } from 'react';
// import store from './store';
import { Bar } from 'charts-com';
// import store from './store/index';
import store from './store/index-saga';
import TodoListUI from './TodoListUI';
import FunComponent from './FunComponent';
import { 
  // getInitTodos,
  getChangeInputValueAction,
  getAddTodoItemAction,
  getDeleteTodoItemAction,
  getGetTodosDataAction,
  getGetChartDataAction
} from './store/actionCreators';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = store.getState();

    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  // 截流（demo）
  throttle(delay) {
    let last
    return function (content) {
      let now = +new Date()
      if (last && now < last + delay) {

        // 去掉中间部分也可以
        // clearTimeout(deferTimer);
        // deferTimer = setTimeout(function () {
        //   last = now;
        //   console.log('ajax request ' + content);
        // }, delay)
      } else {
        last = now;
        console.log('ajax request ' + content);
      }
    }
  }

  throttleAjax = this.throttle(1000);

  handleInputChange(e) {
    store.dispatch(getChangeInputValueAction(e.target.value));

    // throttleAjax(e.target.value)
    this.throttleAjax(e.target.value);
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
    const { inputValue, todos, chartOption = {} } = this.state;
    return (
      <>
        <TodoListUI inputValue={inputValue}
          todos={todos}
          handleInputChange={this.handleInputChange}
          handleClickSubmit={this.handleClickSubmit}
          handelDeleteTodo={this.handelDeleteTodo}
        />
        <div style={{
          width: 600,
          height: 400
        }}>
          <Bar style={{ width: 600, height: 400 }}
            option={chartOption}
            theme={'default'}
          />
        </div>
        <FunComponent content={'hello'} />
      </>
    );
  }

  // main
  componentDidMount() {
    // redux thunk
    // store.dispatch(getInitTodos);
    
    // saga
    store.dispatch(getGetChartDataAction());
    store.dispatch(getGetTodosDataAction());
  }
}

export default TodoList;