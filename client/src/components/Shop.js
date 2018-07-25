import React from 'react';
import Header from './Header';
import ShopList from '../containers/ShopList';
import '../styles/page.css';

class Shop extends React.Component {
  render() {
    return (
      <div className="page">
        <Header title="Название" />
        <ShopList />
      </div>
    );
  }
};

export default Shop;
