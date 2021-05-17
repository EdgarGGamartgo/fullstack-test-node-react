import React from 'react';
import { ProductCart } from '../ProductCart/ProductCart';
import { CartListMock } from './../../__mocks__'
import './CartList.scss'

interface CartListProps {
}

export const CartList = ({  }: CartListProps) => {
  return (
    <>
      <h5>Shopping Cart</h5>
      <div className="cart-container">
          {
              CartListMock && CartListMock.carts && CartListMock.carts.map(cart => {
                  const { id } = cart;
                  return <ProductCart {...cart} key={id} />
              })
          }
      </div>
      <h6>Total: {CartListMock.accumulatedPrice}</h6>
   </>
  );
}

