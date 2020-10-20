import React, { Component, Fragment } from 'react';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    });
  }

  render() {

    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick={this.handleClick}>toggle</button>
      </Fragment>
    );
  }
}

export default App;