/*
 * @Author: yzh
 * @Date: 2020-11-09 15:36:56
 * @LastEditTime: 2021-08-27 11:12:21
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
          <Bar
            option={chartOption}
          />
        </div>
        <FunComponent content={'hello'}/>
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