import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'

import './Header.scss'

interface HeaderProps {
  renderCart: boolean, productIds?: any
}

const Header = ({ renderCart, productIds }: HeaderProps) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(productIds.productIds.length)
  }, [productIds.productIds])

  let history = useHistory();
  const goToCartPage = () => {
    history.push({
      pathname: '/cart',
      search: '',
      state: {
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
          renderCart ? <div className='right'><img onClick={goToCartPage} className='cart' src='./shoppingCart.jpg' alt="cart" /><span>{products}</span></div> : null
        }
      </div>
      <hr />
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    productIds: state.foodShop,
  }
}

export default connect(mapStateToProps, null)(Header)