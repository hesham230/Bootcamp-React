import React, { Component } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="header-link">Home Page</Link>
        <Link to="products" className="header-link">Products</Link>
      </div>
    )
  }
}

export default Header;
