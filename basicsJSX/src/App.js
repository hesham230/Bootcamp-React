import React from 'react';
import logo from './logo.svg';
import './App.css';


const data = ["hello", "world"];

const newData = data.map(day => day.charAt(0).toUpperCase() + day.slice(1).toLowerCase());


const number1 = 5;
const number2 = 6;
const sum = () => {
  return ` The sum of: ${number1} + ${number2}  is = ${number1 + number2}`;
}

const string = 'I love React!';

function App() {
  return (
    <div className="App">
      {`"${newData.join(' ')}"`}
     <br/>
     {sum()} <br/>
     {`The string’s length is: ${string.length}`}
    </div>
  );
}

export default App;
