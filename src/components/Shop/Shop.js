import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart]= useState([])
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    } , [])

const handlerAddToCart = (product) =>{
    // console.log(product)
    const newCart = [...cart, product ]
    setCart(newCart)
}

    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                   products.map(product=> <Products 
                    key= {product.id}
                    product= {product}
                    handlerAddToCart = {handlerAddToCart} 
                    ></Products>)
               }
            </div>

            <div className="cart-container">
                <h3>Oder summary</h3>
                <p>selected item: {cart.length} </p>
                {/* <p>Total price: &{} </p> */}
                {/* <p>Total shopping charge: &{} </p> */}
                {/* <p>Tax: &{} </p> */}
                {/* <h2>Grand Total: ${} </h2> */}
            </div>
        </div>
    );
};

export default Shop;