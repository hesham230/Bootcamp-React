import React from 'react';
import '../style.css';
class Button extends React.Component{
  render(){
    return(
    <div>
      <button className={this.props.classes ?this.props.classes.join(' '):null}>{this.props.text}</button>
    </div>
    )
  }
}

export default Button;