import React, { useEffect, useState } from 'react';
import  ProductCart  from '../ProductCart/ProductCart';
import { CartListMock } from './../../__mocks__'
import { fetchCartRequest } from './../../redux/Cart/actions'
import {
  getPendingSelector,
  getCartSelector,
  getErrorSelector,
} from "./../../redux/Cart/selectors";
import { connect } from 'react-redux'
import { useDispatch, useSelector } from "react-redux";

import './CartList.scss'

interface CartListProps {
  productIds: any
}

const CartList = ({ productIds }: CartListProps) => {

  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const cart = useSelector(getCartSelector);
  const error = useSelector(getErrorSelector);
  const [totalCost, setTotalCost] = useState('')

  const computeTotalCost = () => {
    const validate = cart && cart.data
    let sum =  0 
    if (validate) {
      cart.data.forEach((c:any) => {
        let price = Number(c.totalProductPrice.substring(1));
        sum += price
      })
    }
    setTotalCost(`$${sum.toFixed(2)}`)
  } 

  useEffect(() => {
    dispatch(fetchCartRequest(productIds.productIds));
  }, [productIds.productIds]);

  useEffect(() => {
    computeTotalCost()
  }, [cart]);

  return (
    <>
      <h5>Shopping Cart</h5>
      <div className="cart-container">
          {
              cart && cart.data && cart.data.map((cart:any) => {
                  const { id } = cart;
                  console.log('check IDS', id)
                  return <ProductCart {...cart} key={id} />
              })
          }
      </div>
      <h6>Total: {totalCost}</h6>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartList)