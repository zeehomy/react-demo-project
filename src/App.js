import React from 'react';      // React 使得可以使用JSX语法
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          name: 'a'
        },
        {
          id: 2,
          name: 's'
        },
        {
          id: 3,
          name: 'd'
        },
        {
          id: 4,
          name: 'f'
        }
      ]
    };

  }

  handleClick() {

    this.setState({
      list: [
        {
          id: 1,
          name: 'add'
        },
        {
          id: 2,
          name: 'sss'
        },
        {
          id: 3,
          name: 'd'
        },
        {
          id: 4,
          name: 'f'
        }
      ]
    });
  }

  render() {
    const {list} = this.state;

    return (
      <>
        {
          list.map((item, index) => {
            return (
              <div key={index} my-name={item.name}>
              </div>
            );
          })
        }
        <button onClick={e => {
          this.handleClick();
        }}>改变</button>
      </>
    );
  }
}

export default App;
