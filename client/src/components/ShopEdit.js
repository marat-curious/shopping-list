import React from 'react';
import Header from './Header';

class ShopEdit extends React.Component {
  render() {
    return (
      <div className="page">
        <Header
          title="Название"
          back
          add
        />
      </div>
    );
  }
};

export default ShopEdit;
