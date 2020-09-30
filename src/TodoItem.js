import React, { Component } from 'react'; 

class TodoItem extends Component {

  constructor(props) {
    super(props);

    // 在内部bind，在复杂组件中会有性能损耗
    this.handleClickDeleteItem = this.handleClickDeleteItem.bind(this);
  }

  render() {
    return (
      /* dangerouslySetInnerHTML={{__html: todoItem}} */
      <li>
        {this.props.todoItem}
        <button onClick={this.handleClickDeleteItem}>
          X
        </button>
      </li>
    )
  }

  handleClickDeleteItem() {
    this.props.handleClickDeleteProp(this.props.index);
    // console.log(this.props.index);
  }
}

export default TodoItem;