import React from 'react';
import ReactDom from 'react-dom';
import Buttons from './Buttons';

const App = () => {
  return (
    <div>
      <Buttons />
    </div>
  )
}

ReactDom.render(<App />, document.querySelector('#root'));
