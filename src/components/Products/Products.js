import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
          <button onClick={()=> props.handlerAddToCart(props.product)} className='btn-cart'>
              <p className='btn-text'> Add to cart </p>
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
    );
};

export default Products;