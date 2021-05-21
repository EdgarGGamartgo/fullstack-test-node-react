import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Header, CartList, OrderForm } from './../../components'
import { useHistory } from "react-router-dom";

export const ShoppingCart = () => {

  const location: any = useLocation();
  const myparam = location;
  let history = useHistory();

  useEffect(() => {

    const redirect = myparam.state && myparam.state.update

    if (!redirect) {
      history.push({
        pathname: '/',
        search: '',
        state: {
          update: false,
        },
      });
    }
  }, [])


  return (
    <>
      <Header renderCart={false} />
      <CartList />
      <OrderForm />
    </>
  );
}

