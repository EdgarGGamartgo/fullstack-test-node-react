import React from 'react';
import { useHistory } from "react-router-dom";
import './Header.scss'

interface HeaderProps {
  renderCart: boolean
}

export const Header = ({ renderCart }: HeaderProps) => {

  let history = useHistory();
  const goToCartPage = () => {
    history.push({
  pathname: '/cart',
  search: '',  // query string
  state: {  // location state
    update: true, 
  },
});
  }

  const goToHomePage = () => {
    history.push("/");
  }

  return (
    <>
    <div className='header'>
        <img className='logo' onClick={goToHomePage} src='./fastFoodIcon.png' alt="logo" />
        <p>Fast Shopping</p>
        {
          renderCart ? <div className='right'><img onClick={goToCartPage} className='cart' src='./shoppingCart.jpg' alt="cart" /><span>1</span></div> : null
        }
    </div>
    <hr/>
    </>
  );
}

