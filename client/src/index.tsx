import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ProductsListPage, ThankYouPage, ShoppingCartPage } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

ReactDOM.render(
  <Router>
       <Switch>
		      <Route exact path="/" component={ProductsListPage}/>
		      <Route exact path="/thanks" component={ThankYouPage}/>
		      <Route exact path="/cart" component={ShoppingCartPage}/>
          <Redirect to="/" />
	    </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
