// @flow

import React from 'react';
import Header from './Header';
import '../styles/page.css';
import '../styles/list.css';
import Arrow from '../assets/icons/down_arrow.svg';

const selectStyle = {
  background: 'no-repeat center right/20px url(' + Arrow + ')',
};

const CategorySelect = props => {
  const options = props.categories.map(item =>
    <option
      key={item._id}
      value={item.name}
    >
      {item.name}
    </option>
  );

  return (
    <div className="list__select list__select_categories">
      <select
        onChange={(event) => props.update(event.target.value)}
        style={selectStyle}
      >
        {options}
      </select>
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
          update={this.props.updateProducts}
        />
      </div>
    );
  }
};

export default ProductList;
