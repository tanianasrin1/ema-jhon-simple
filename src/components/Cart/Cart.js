import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h3>Oder summary</h3>
             <p>selected item: {cart.length} </p>
        </div>
    );
};

export default Cart;
