import React from 'react';
import './style.css';
class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRender: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ shouldRender: true });
    }, 1000);
  }

  render() {
    var style = {
      width: this.props.size + "px",
      height: this.props.size + "px",
    };
    return this.state.shouldRender ? (
      <div className="box pop-in" style={style}></div>
    ) : null;
  }  
}

export default Box
