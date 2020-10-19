import React, { Component } from 'react';

class Test extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '123'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Test getDerivedStateFromProps');
    console.log('getDerivedStateFromProps', state);
    return null;
  }

  // 丛第二次父组件render执行后开始执行，可能该子组件为异步生成
  UNSAFE_componentWillReceiveProps() {
    console.log('Test componentWillReceiveProps');
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
    console.log('Test render');
    // return <div>{this.props.content}</div>
    return <div onClick={this.handleClick}>123</div>
    // return React.createElement('div', {}, 'createElement');
  }

}

export default Test;