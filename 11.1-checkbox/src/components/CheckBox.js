import React, { Component } from 'react'


class CheckBox extends Component {

  render() {
    return (
      <div>
       <input key={this.props.id}  type="checkbox" defaultChecked={this.props.isChecked}/> 
       {this.props.value}
      </div>
    );
  }
}

export default CheckBox