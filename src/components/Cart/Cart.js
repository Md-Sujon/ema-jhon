import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
   
    return (
        <div>
            <h2>Order Summary Cart</h2>
           <h3>This is Cart: {cart.length}</h3>
        </div>
    );
};

export default Cart;