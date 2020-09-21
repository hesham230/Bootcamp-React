import React from 'react'
import axios from 'axios';
import '../style.css';
import AddAvatar from './AddAvatar';
import DeleteAvatar from './DeleteAvatar';
import UpdateAvatar from './UpdateAvatar';

class Avatars extends React.Component {
  state = {
    id: '',
    name: '',
    avatar: [],
  };
  
  // Get User

  getUser = async () => {
   const response = await axios.get('https://5f684e9b38ce870016398f48.mockapi.io/api/v1/users');
    console.log(response.data);
    response.data.map((i)=> (
       this.setState({ id: i.id, name: i.name, avatar: i.avatar})
    ))
  }

  render() {
    return (
      <div>
          {/* Display */}
        <div className="details">
          <h3>Id: {this.state.id}</h3>
          <h3>Name: {this.state.name}</h3>
          <img alt="avatar" src={this.state.avatar}></img>         
        </div>
        <button className="btn-1" onClick={this.getUser}>Display Random User</button>
        <hr/>
        <br/>

        <div className="add">
          <AddAvatar />
          <UpdateAvatar />
          <DeleteAvatar />
        </div>
      </div>
    )
  }
}

export default Avatars
