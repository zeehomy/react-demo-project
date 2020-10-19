import React, { Component } from 'react';

class Test extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '123'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // 丛第二次父组件render执行后开始执行，可能该子组件为异步生成
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  handleClick() {
    this.setState(() => {

      return {
        name: 'new name'
      }
    });
  }

  shouldComponentUpdate(nextProps, nextState) {

    console.log('Test shouldComponentUpdate');
    return true;
  }

  render() {
    console.log('Test');
    // return <div>{this.props.content}</div>
    return <div onClick={this.handleClick}>123</div>
    // return React.createElement('div', {}, 'createElement');
  }

}

export default Test;