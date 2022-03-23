import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    // console.log(cart)
    let total = 0
    let shipping = 0
    for(const product of cart){
        total = total + product.price
        shipping = shipping + product.shipping
    }
    const tax = (total*0.1).toFixed(2)
    return (
        <div className='cart'>
             <h3>Oder summary</h3>
             <p>selected item: {cart.length} </p>
             <p>Total price: ${total} </p>
             <p>Total shopping charge: ${shipping}  </p>
             <p>Tax: ${tax}  </p>
             <h2>Grand Total:  </h2>
        </div>
    );
};

export default Cart;
