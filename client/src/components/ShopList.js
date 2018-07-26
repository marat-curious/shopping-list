import React from 'react';
import Header from './Header';
import Edit from '../assets/icons/edit.svg';
import Delete from '../assets/icons/delete.svg';
import '../styles/page.css';
import '../styles/list.css';

function ShopItem(props) {
  const items = props.items.map((item) =>
    <li
      key={item._id}
      className="list__item"
    >
      <span className="list__item-name">{item.name}</span>
      <img
        src={Edit}
        className="list__item-icon list__item-icon_edit"
      />
      <img
        src={Delete}
        className="list__item-icon list__item-icon_delete"
      />
    </li>
  );
  return <ul>{items}</ul>;
};

class ShopList extends React.Component {
  render() {
    return (
      <div className="page">
        <Header title="Название" />
        <div className="list">
          <ShopItem items={this.props.list} />
        </div>
      </div>
    );
  }
};

export default ShopList;
