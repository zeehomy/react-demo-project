import React, { Component } from 'react';

class Test extends Component {

  // 丛第二次父组件render执行后开始执行，可能该子组件为异步生成
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  render() {
    // console.log('Test');
    // return <div>{this.props.content}</div>
    // return <div>123</div>
    return React.createElement('div', {}, 'createElement');
  }

}

export default Test;