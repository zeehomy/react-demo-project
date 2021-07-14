/*
 * @Date: 2021-07-14 13:47:04
 * @LastEditTime: 2021-07-14 13:47:28
 * @Description: 
 * @FilePath: /demo-project/src/RenderDemo.js
 */
import React, { /* useEffect, useState, */ Component } from 'react';

class Child extends Component {

  render() {
    console.log('cleared Child render');
    return (
      <div>
        I am a Child.
      </div>
    );
  }
}

class Parent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        show: !prevState.show
      }
    });
  }

  render() {
    console.log('cleared Parent render');
    return (
      <div>
        <button onClick={this.handleClick}>点击</button>
        <Child />
      </div>
    );
  }
}

export default Parent;