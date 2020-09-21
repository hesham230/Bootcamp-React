import React from 'react';
import axios from 'axios';
import Category from './Category';
import '../style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: 'Press the button to get a joke!'
    };
    
    this.getJoke = this.getJoke.bind(this);
  }
  
  getJoke = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    this.setState({joke: response.data.value});
  }
  
  render() {
    return(
      <div className="container">
        <h1>Chuck Norris Api App</h1>
        <h3 className="joke-color">{this.state.joke}</h3>
        <button onClick={this.getJoke}>Get a random joke!</button>
        <br/>
        
        <div>
        <Category />
        </div>
      </div>
    );
  }
}

export default App;