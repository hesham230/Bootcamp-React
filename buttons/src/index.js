import React from 'react';
import ReactDom from 'react-dom';
import Buttons from './Buttons';
import './style.css';

// const App = () => {

//   return (
//     <div>
//       <Buttons  classes={['bold']} text="Important"/>
//       <Buttons text="Not Important"/>
//     </div>
//   )
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Buttons  classes={['bold']} text="Important"/>
        <Buttons text="Not Important"/>
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'));
