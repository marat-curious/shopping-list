import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Edit from '../assets/icons/edit.svg';
import Delete from '../assets/icons/delete.svg';
import '../styles/page.css';
import '../styles/list.css';

const Button = withRouter(({ history, type, id, remove }) => {
  return (
    <button
      className={ `list__button list__button_${type}` }
      onClick={
        () => type === 'edit'
          ? history.push(`/shop/item/${id}`)
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

const ShopItem = props => {
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

class ShopList extends React.Component {
  render() {
    return (
      <div className="page">
        <Header
          title="Магазины"
          back="/"
          add="/shop/add"
        />
        <div className="list">
          <ShopItem
            items={this.props.list}
            remove={this.props.remove}
          />
        </div>
      </div>
    );
  }
};

export default ShopList;
