import React from 'react';
import './Cart.css';

const Cart = (props) => {
   const {cart} = props;
   // console.log(cart);

let total = 0;
let shipping = 0;
let quantity = 0;
 

 for(const product of cart){
   quantity = quantity+product.quantity;
    total = total + product.price*product.quantity;
    shipping = shipping+product.shipping;
 }

 let Tax = total * 0.1; 
 let GrandTotal = total+shipping+Tax;

    return (
        <div className='cart'>
            <h2>Order Summary Cart</h2>
           <p>Total Item: {quantity}</p>
           <p>Total Price: $ {total}</p>
           <p>Total Shipping: $ {shipping}</p>
           <p>Tax: ${Tax.toFixed(2)}</p>
           <h5 className='grantTotal'>Grand Total: $ {GrandTotal}</h5>
        </div> 
    );
};

export default Cart;