import React from 'react';
import { Header, CartList } from './../../components'

interface ShoppingCartProps {
    userName?: string,
    orderId?: string,
}

export const ShoppingCart = ({
    userName,
    orderId,
}: ShoppingCartProps) => {
  return (
    <>
      <Header renderCart={false}/>
      <CartList />
    </>
  );
}

