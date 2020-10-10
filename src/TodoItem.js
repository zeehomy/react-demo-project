import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

class TodoItem extends Component {

  constructor(props) {
    super(props);

    // 在内部bind，在复杂组件中会有性能损耗
    this.handleClickDeleteItem = this.handleClickDeleteItem.bind(this);
  }

  render() {

    // 子组件只能使用属性值，不能改变传递进来的属性值
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


// 类型
TodoItem.propTypes = {
  todoItem: PropTypes.string,
  handleClickDeleteProp: PropTypes.func,
  index: PropTypes.number
};

export default TodoItem;