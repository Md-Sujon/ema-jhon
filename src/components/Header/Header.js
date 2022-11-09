import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div>
            <a href="/shop">Shop</a>
            <a href="/orders">Orders</a>
            <a href="/inventory">inventory</a>
            <a href="/about">About</a>
            
           </div>
        </nav>
    );
};

export default Header;