// @flow

import React from 'react';
import Header from './Header';

const CategorySelect = props => {
  const options = props.categories.map(item =>
    <option
      key={item._id}
      value={item._id}
    >{item.name}</option>
  );

  return (
    <div className="page__select page__select_categories">
      <select>{options}</select>
    </div>
  );
};

class ProductList extends React.Component {
  render() {
    return (
      <div className="page">
        <Header
          title="Продукты"
          back="/"
          add="/product/add"
        />
        <CategorySelect
          categories={this.props.categories}
        />
      </div>
    );
  }
};

export default ProductList;
