import React from 'react';
import Button from './Button';

class App extends React.Component{
  
  render(){
    return(
      <div>
        <Button  classes={['red']} text="red"/>
        <Button  classes={['blue']} text="blue"/>
        <Button classes={['yellow']} text="yellow"/>
        <h4>The color selected is:</h4>
      </div>
    )
  }
}

export default App;