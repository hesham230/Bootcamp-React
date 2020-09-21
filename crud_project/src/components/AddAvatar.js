import React, { Component } from 'react'
import '../style.css';
import axios from 'axios';
class AddAvatar extends Component {
  state = {
    id: '',
    name: '',
    avatar: [],
  }

  handleChange = event => {
    this.setState({ id: event.target.value, name: event.target.value  });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      id: this.state.id,
      name: this.state.name,
      avatar: this.state.avatar
    };

    const res = await axios.post(`https://5f684e9b38ce870016398f48.mockapi.io/api/v1/users`, { user })
        console.log(res);
        console.log(res.data);
  }
  render() {
    return (
      <div>
         {/* Add */}
         <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add User id:
            <input type="text" id="name" onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Add Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit" className="btn">Add User</button>
        </form>
      </div>
      </div>
    )
  }
}

export default AddAvatar
