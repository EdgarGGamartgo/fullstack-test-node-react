import React from 'react';
import { Header, CardsList } from './../../components'

export const ProductsList = () => {
  return (
    <>
      <Header renderCart={true} />
      <CardsList />
    </>
  );
}

