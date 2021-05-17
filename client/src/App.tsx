import React from 'react';
import { ProductsList, ThankYou, ShoppingCart } from './layouts'
import { Provider } from 'react-redux'
import store from './redux/store'

 const ProductsListPage = () => {
  return (
    <Provider store={store}>
      <ProductsList/>
    </Provider>
  );
}

 const ThankYouPage = () => {
  return (
    <Provider store={store}>
      <ThankYou/>
    </Provider>
  );
}

 const ShoppingCartPage = () => {
  return (
    <Provider store={store}>
      <ShoppingCart/>
    </Provider>
  );
}

export { ProductsListPage, ThankYouPage, ShoppingCartPage };