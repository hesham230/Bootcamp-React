import React, { Component } from 'react'
import './style.css';

export class Increment extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1})
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>Increment</button>
        <h2>{this.state.count}</h2>   
      </div>
    )
  }
}

export default Increment
