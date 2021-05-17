import React from 'react';
import { ProductsList, ThankYou, ShoppingCart } from './layouts'

 const ProductsListPage = () => {
  return (
    <div>
      <ProductsList/>
    </div>
  );
}

 const ThankYouPage = () => {
  return (
    <div>
      <ThankYou/>
    </div>
  );
}

 const ShoppingCartPage = () => {
  return (
    <div>
      <ShoppingCart/>
    </div>
  );
}

export { ProductsListPage, ThankYouPage, ShoppingCartPage };