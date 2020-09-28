import React from 'react';

class App extends React.Component{
  
  copyValue = () => {
    this.textArea.select()
    document.execCommand("copy")
  }

  render() {
    return (
      <div>
        <div style={{backgroundColor: "grey", margin:"5px", padding:"5px", width:"320px"}}>
          <h3>Click the button to copy the value of the text area </h3>

          <textarea ref={(textarea) => this.textArea = textarea}/>
          
          <br/>

          <button onClick={() => this.copyValue()}>Copy</button>
        </div>
      </div>
    )
  }
}

export default App;