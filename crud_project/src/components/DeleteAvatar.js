import React, { Component } from 'react'
import axios from 'axios';
import '../style.css';

class DeleteAvatar extends Component {
  state = {
    id: '',
  }

   // Delete User
   onhandleChange = event => {
    this.setState({ id: event.target.value });
  }

  onhandleSubmit = async (event) => {
    event.preventDefault();

    const res = await axios.delete(`https://5f684e9b38ce870016398f48.mockapi.io/api/v1/users/${this.state.id}`)
      console.log(res);
      console.log(res.data);
  }

  render() {
    return (
      <div>
          {/* Delete */}
      <div className="add">
        <form onSubmit={this.onhandleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.onhandleChange} />
          </label>
          <button type="submit" className="btn">Delete User</button>
        </form>
      </div>
      </div>
    )
  }
}

export default DeleteAvatar
