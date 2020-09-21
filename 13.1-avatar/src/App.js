import React  from 'react'
import axios from 'axios';
import SearchBar from './SearchBar';
import List from './List';
import './style.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      avatars: [],
      store: []
    }
  }
  componentDidMount(){
    axios.get('https://randomuser.me/api/?results=10')
    .then(res => res.data.results.map(result => ({
        name: `${result.name.first} ${result.name.last}`,
        email: `${result.email}`,
        image: `${result.picture.medium}`,
        id: result.registered
      })))
    .then(newData => this.setState({avatars: newData, store: newData}))
    .catch(error => console.log((error)))
  }

  filter = (e) =>{
    this.setState({avatars: this.state.store.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))})
  }

  render() {
    const {avatars} = this.state
    return (       
      <div>
      <SearchBar filter={(e) => this.filter(e)}/>
      <List usernames={avatars}/>
    </div>
      
    )
  }
}
export default App
