// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Edit from '../assets/icons/edit.svg';
import Delete from '../assets/icons/delete.svg';
import Arrow from '../assets/icons/down_arrow.svg';
import '../styles/page.css';
import '../styles/list.css';

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

const Button = withRouter(({ history, type, id, remove }) => {
  return (
    <button
      className={ `list__button list__button_${type}` }
      onClick={
        () => type === 'edit'
          ? history.push(`/product/item/${id}`)
          : remove(id)
      }
    >
      <img
        src={ type === 'edit' ? Edit : Delete }
        className={ `list__item-icon list__icon_${type}` }
      />
    </button>
  );
});

const ProductItems = props => {
  const items = props.items.map((item) =>
    <li
      key={item._id}
      className="list__item"
    >
      <span className="list__item-name">{item.name}</span>
      <Button
        type="edit"
        id={item._id}
      />
      <Button
        type="delete"
        id={item._id}
        remove={props.remove}
      />
    </li>
  );
  return <ul>{items}</ul>;
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
        <div className="list">
          <ProductItems
            items={this.props.products}
            remove={this.props.remove}
          />
        </div>
      </div>
    );
  }
};

export default ProductList;
