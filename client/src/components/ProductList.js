// @flow

import React from 'react';
import Header from './Header';

class ProductList extends React.Component {
  render() {
    return (
      <div className="page">
        <Header
          title="Продукты"
          back="/"
          add="/product/add"
        />
      </div>
    );
  }
};

export default ProductList;
