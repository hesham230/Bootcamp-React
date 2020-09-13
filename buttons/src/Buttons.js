import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Buttons = (props) => {
  const styleObj = {
    fontWeight: "bold",
}

  return (
    <div>
    <button style={styleObj}>Importnat</button>
    
    <button>Not Important</button>
    </div>
  )
}

export default Buttons;
