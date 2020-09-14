import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Box from './Box'
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Box />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
