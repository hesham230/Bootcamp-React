import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';

class App extends React.Component {
  
   
  render() {
    return (
      <div>
        <Timer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

