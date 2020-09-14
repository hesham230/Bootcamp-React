// import React, { Component } from 'react';
// import './style.css';

// const Buttons = (props) => {
//   return(
//     <div className="wrapper">
//       <button className={props.classes ?props.classes.join(' '):null}>{props.text}</button>
//     </div>
//   )
// }

import React, { Component } from 'react'
import './style.css';

class Buttons extends Component {
  
  render() {
    return (
      <div>
        <button className={this.props.classes ?this.props.classes.join(' '):null}>{this.props.text}</button>
      </div>
    )
  }
}

export default Buttons

