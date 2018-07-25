import React from 'react';

function ShopItem(props) {
  const items = props.items.map((item) =>
    <li key={item._id}>{item.name}</li>
  );
  return <ul>{items}</ul>;
};

class ShopList extends React.Component {
  render() {
    return (
      <div>
        <h2>SHOP_LIST</h2>
        <ShopItem items={this.props.list} />
      </div>
    );
  }
};

export default ShopList;
