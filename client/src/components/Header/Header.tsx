import React from 'react';
import './Header.scss'

interface HeaderProps {
  renderCart: boolean
}

export const Header = ({ renderCart }: HeaderProps) => {
  return (
    <>
    <div className='header'>
        <img className='logo' src='./fastFoodIcon.png' alt="logo" />
        <p>Fast Shopping</p>
        {
          renderCart ? <div className='right'><img className='cart' src='./shoppingCart.jpg' alt="cart" /><span>1</span></div> : null
        }
    </div>
    <hr/>
    </>
  );
}

