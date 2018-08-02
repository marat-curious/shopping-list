import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ShopList from '../containers/ShopList';
import ShopItem from '../containers/ShopItem';
import ShopAdd from '../containers/ShopAdd';
import CategoryList from '../containers/CategoryList';
import CategoryItem from '../containers/CategoryItem';
import CategoryAdd from '../containers/CategoryAdd';
import ProductList from '../components/ProductList';
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
        <Route path="/shop/add" component={ShopAdd}/>
        <Route path="/shop/item/:id?" component={ShopItem}/>

        <Route exact path="/category" component={CategoryList}/>
        <Route path="/category/add" component={CategoryAdd}/>
        <Route path="/category/item/:id?" component={CategoryItem}/>

        <Route exact path="/product" component={ProductList}/>
      </div>
    </Router>
  }
};

export default App;
