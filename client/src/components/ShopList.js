import React from 'react';
import '../styles/list.css';

function ShopItem(props) {
  const items = props.items.map((item) =>
    <li key={item._id}>{item.name}</li>
  );
  return <ul>{items}</ul>;
};

class ShopList extends React.Component {
  render() {
    return (
      <div className="list">
        <ShopItem items={this.props.list} />
      </div>
    );
  }
};

export default ShopList;
