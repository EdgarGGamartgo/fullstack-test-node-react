import React from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'

import './Header.scss'

interface HeaderProps {
  renderCart: boolean, productIds: any
}

const Header = ({ renderCart, productIds }: HeaderProps) => {

  let history = useHistory();
  console.log('productIds productIds: ', productIds)
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
          renderCart ? <div className='right'><img onClick={goToCartPage} className='cart' src='./shoppingCart.jpg' alt="cart" /><span>{productIds!.productIds!.length}</span></div> : null
        }
    </div>
    <hr/>
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

const mapStateToProps = (state: any) => {
      return {
          productIds: state.foodShop,
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)