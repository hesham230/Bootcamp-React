import React, { Component } from 'react';
import store from './store';
import { Link } from 'react-router-dom';

class Products extends Component {
  state = { data: [] }
  render() {
    const products = store.map(product =>(
      <Link key={product.id} to={`/products/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      )
    )          
    return (
      <div className="header-1">
        <div>
          {products}
        </div>
      </div>
    )
  }
}

export default Products;
