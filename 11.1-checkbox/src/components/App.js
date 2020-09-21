import React, { Component } from 'react';
import CheckBox from './CheckBox';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arr: [
        {key: 1, value: "I read the term of the app", isChecked: false},
        {key: 2, value: "I accept the term of the app", isChecked: false},
        {key: 3, value: "I want to get the weekly news letter", isChecked: true},
        {key: 4, value: "I want to get sales and offers", isChecked: true}
      ]
    }
  }
  
  render() {
    return (
      <div>
        
        { this.state.arr.map((a) => {
            return (<CheckBox {...a} />)
          })
        }
        
      </div>
    );
  }
}

export default App
