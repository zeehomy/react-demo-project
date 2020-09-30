import React, { Component, Fragment } from 'react'; 
import TodoItem from './TodoItem';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: 'hello',
      todoList: []
    };

    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertInput">事项：</label>
          <input id="insertInput"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          {
            //注释
          }
          <button onClick={this.handleClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.todoList.map((todoItem, index) => {
              return (
                <TodoItem key={index}
                  todoItem={todoItem}
                  index={index}
                  handleClickDeleteProp={this.handleClickDelete}
                />
              );
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleClick() {
    this.setState({
      inputValue: '',
      todoList: [...this.state.todoList, this.state.inputValue]
    });
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