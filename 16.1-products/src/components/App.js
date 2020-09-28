import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import Products from './Products';
import ProductDetails from './ProductDetails';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={HomePage}/>
            <Route path="/products" exact component={Products}/>
            <Route path="/products/:id" exact component={ProductDetails}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
