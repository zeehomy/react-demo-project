import React, { Component } from 'react';

class Test extends Component {

  render() {
    // console.log('Test');
    // return <div>{this.props.content}</div>
    // return <div>123</div>
    return React.createElement('div', {}, 'createElement');
  }

}

export default Test;