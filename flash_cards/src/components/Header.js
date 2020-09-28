import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="header-link">Home Page</Link>
        <Link to="play" className="header-link">Play Game</Link>
        <Link to="manage" className="header-link">Manage Cards</Link>
      </div>
    )
  }
}

export default Header;
