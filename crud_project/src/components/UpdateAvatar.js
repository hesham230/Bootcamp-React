import React, { Component } from 'react'
import axios from 'axios';
class UpdateAvatar extends Component {
  state = {
    id: '',
    name: '',
  };

  updateUser = async () => {
    const response = await axios.get('https://5f684e9b38ce870016398f48.mockapi.io/api/v1/users');
     console.log(response.data);
     response.data.map((i)=> (
        this.setState({ id: i.id, name: i.name})
     ))
   }

  render() {
    return (
      <div>
        {/* Update */}
        <div className="add">
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose id:
            <input type="text" id="id" onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Update Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit" className="btn">Update User</button>
        </form>
      </div>
      </div>
    )
  }
}

export default UpdateAvatar
