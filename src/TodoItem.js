import React, { Component } from 'react'; 

class TodoItem extends Component {

  constructor(props) {
    super(props);

    // 在内部bind，在复杂组件中会有性能损耗
    this.handleClickDeleteItem = this.handleClickDeleteItem.bind(this);
  }

  render() {
    const { todoItem } = this.props;
    return (
      /* dangerouslySetInnerHTML={{__html: todoItem}} */
      <li>
        {todoItem}
        <button onClick={this.handleClickDeleteItem}>
          X
        </button>
      </li>
    )
  }

  // 方法也可以在props中找到；还可以传入props
  handleClickDeleteItem() {
    const { handleClickDeleteProp, index } = this.props;
    handleClickDeleteProp(index);
    // console.log(this.props.index);
  }
}

export default TodoItem;