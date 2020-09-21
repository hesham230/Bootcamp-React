import React from 'react'
import axios from 'axios';
import SearchBar from './SearchBar';
import List from './List';
import '../style.css';

class App extends React.Component {
  state = {categories: []}

  

  onSerachSubmit = async (term) => {
    const response = await axios.get('https://api.chucknorris.io/jokes/categories')
    console.log(response.data);
    this.setState({ categories: response.data })
  }



  render(){
    return(
      <div>
        <SearchBar onSubmit={this.onSerachSubmit}/>
        <List categories={this.state.categories}/>
      </div>
    )
  }
  
}

export default App

//   constructor(props) {
//     super(props);

//     this.state = {
//       categories: [],
//     };
    
//     this.getCategory = this.getCategory.bind(this);
//   }
  
//   getCategory = async () => {
//     const response = await axios.get('https://api.chucknorris.io/jokes/categories');
//     this.setState({categories: response.data.join(' ')});
//   }
  
//   render() {
  
//     return(
//       <div>
//         <h1>Chuck Norris Api App</h1>
//         <div className="sel" onChange={this.state.value}></div>
//         <button onClick={this.getCategory}>Get a random joke!</button>
//         <br/>
//       </div>
//     );
//   }