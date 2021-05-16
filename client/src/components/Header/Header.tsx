import React from 'react';
import './Header.scss'

export const Header = () => {
  return (
    <>
    <div className='header'>
        <img className='logo' src='./fastFoodIcon.png' alt="logo" />
        <p>Fast Shopping</p>
        <div className='right'><img className='cart' src='./shoppingCart.jpg' alt="cart" /><span>1</span></div>
    </div>
    <hr/>
    </>
  );
}

