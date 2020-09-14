import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Increment from './Increment';

export class App extends Component {
  render() {
    return (
      <div>
        <Increment />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
