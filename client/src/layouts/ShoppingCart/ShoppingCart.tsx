import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Header, CartList, OrderForm } from './../../components'
import { useHistory } from "react-router-dom";

interface ShoppingCartProps {
    userName?: string,
    orderId?: string,
}

export const ShoppingCart = ({
    userName,
    orderId,
}: ShoppingCartProps) => {

  const location: any = useLocation();
  const myparam = location;
  let history = useHistory();


  useEffect(() => {

    const redirect = myparam.state && myparam.state.update

    if (!redirect) {
        history.push({
          pathname: '/',
          search: '',  // query string
          state: {  // location state
            update: false, 
          },
        });
    }
  }, [])


  return (
    <>
      <Header renderCart={false}/>
      <CartList />
      <OrderForm/>
    </>
  );
}

