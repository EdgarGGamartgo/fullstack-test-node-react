import React from 'react';
import  { Header, CardsList } from './../../components'
import './ProductsList.scss'

export const ProductsList = () => {
  return (
    <>
      <Header renderCart={true}/>
      <CardsList/>
    </>
  );
}

