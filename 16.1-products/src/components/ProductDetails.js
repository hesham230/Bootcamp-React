import React from 'react'
import store from './store';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  render(){
    console.log(this.props); 

    const storeProducts = store.map((i) => {
      if(this.props.match.params.id == i.id){
        return (
          <div>
            <h3>Title: {i.title}</h3>
            <h3>Id: {i.id}</h3>
            <h3>Size: {i.size}</h3>
            <h3>Price: {i.price}</h3>
            <img src={i.imageUrl}></img>
          </div>
        )
      }
    })

    return (
      <div className="products">
        {storeProducts}
        <Link to={`/products`}>Back</Link> 
      </div>
    )
  }
}

export default ProductDetails
