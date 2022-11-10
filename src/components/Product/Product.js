import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const {handleAddToCart,product} = props;
    const {img,name,price,category,ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product_info'>
            <p className='product_name'>{name}</p>
            <p><small>Price:$ {price}</small></p>
            <p><small>category: {category}</small></p>
            <p><small>Star: {ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn_cart'>
                <p>Add to Cart <FontAwesomeIcon className='icon' icon={faCartShopping} /></p>
                 
            </button>
        </div>
    );
};

export default Product;