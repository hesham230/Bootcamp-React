import React from 'react';
import './style.css';

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={this.props.style}></div>;
  }
}

export default Box;