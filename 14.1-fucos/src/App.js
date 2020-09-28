import React from 'react';

class App extends React.Component{

  componentDidMount(){
    this.nameInput.focus();
  }
  render() {
    return(
      <div>
        <input defaultValue="Won't focus" />
        <br/> <br/>
        <input ref={(input) => { this.nameInput = input }} defaultValue="will focus"/>
      </div>
    );
  }
}

export default App;