import React, { Component } from 'react'
import './style.css';

class Box extends Component {
  constructor(props){

    super(props);
    this.state = {show : true};
    this.showAndHide = this.showAndHide.bind(this);
  }

  showAndHide = () => {
    const { show } = this.state;
    this.setState( { show: !show} )
  }

  render() {
    return (
      <div className="box">
        <button onClick={this.showAndHide} className="btn">Show/Hide</button>
        {this.state.show && <div className="inner-box"></div>}
      </div>
    )
  }
}


export default Box
