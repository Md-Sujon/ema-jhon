import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img,name,price,category,ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product_info'>
            <p className='product_name'>{name}</p>
            <p><small>Price:$ {price}</small></p>
            <p><small>category: {category}</small></p>
            <p><small>Star: {ratings}</small></p>
            </div>
            <button className='btn_cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;