import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
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
        <CSSTransition in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          onEntered={(node) => {node.style.color = 'red';}}
          appear={true}
        >
          <div id="div">hello</div>
        </CSSTransition>
        <button onClick={this.handleClick}>toggle</button>
      </Fragment>
    );
  }
}

export default App;