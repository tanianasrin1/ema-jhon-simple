import React from 'react';
import './Products.css'

const Products = (props) => {
   const {name, img, seller, price, ratings, stock} = props.product
    return (
        <div className='product'>
           <img src={img} alt="" />
           <p className='Product-name'>{name}</p>
          <div className='product-info'>
          <p>Price: ${price} </p>
           <p><small>Seller: {seller} </small></p>
           <p><small>Rating: {ratings} stars </small></p>
           <p><small>Stock:  {stock} </small></p>
          </div>
          <button className='btn-cart'>
              <p> Add to cart </p>
          </button>
        </div>
    );
};

export default Products;