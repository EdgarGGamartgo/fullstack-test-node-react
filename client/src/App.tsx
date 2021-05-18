import React from 'react';
import { ProductsList, ThankYou, ShoppingCart } from './layouts'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor }  from './redux/store'

 const ProductsListPage = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ProductsList/>
      </PersistGate>
    </Provider>
  );
}

 const ThankYouPage = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThankYou/>
      </PersistGate>
    </Provider>
  );
}

 const ShoppingCartPage = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ShoppingCart/>
      </PersistGate>
    </Provider>
  );
}

export { ProductsListPage, ThankYouPage, ShoppingCartPage };