import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ShopList from '../containers/ShopList';
import ShopEdit from './ShopEdit';
import Category from './Category';
import Product from './Product';
import Buy from './Buy';

class App extends React.Component {
  render() {
    return <Router>
      <div>
        <ul>
          <li><Link to="/">Buy</Link></li>
          <li><Link to="/shop">ShopList</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Buy}/>
        <Route exact path="/shop" component={ShopList}/>
        <Route path="/shop/edit" component={ShopEdit}/>
        <Route path="/category" component={Category}/>
        <Route path="/product" component={Product}/>
      </div>
    </Router>
  }
};

export default App;
