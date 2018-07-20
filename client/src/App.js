import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Shop from './Shop';
import Category from './Category';
import Product from './Product';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/category">Category</Link></li>
        <li><Link to="/product">Product</Link></li>
      </ul>

      <hr/>

      <Route exact path="/shop" component={Shop}/>
      <Route path="/category" component={Category}/>
      <Route path="/product" component={Product}/>
    </div>
  </Router>
);

export default App;
