import React from 'react';
import { connect } from 'react-redux';
import { addShopItem } from '../actions/shopItem';
import ShopItem from '../components/ShopItem';

class ShopAddContainer extends React.Component {
  render() {
    return (
      <ShopItem
        {...this.props}
      />
    );
  }
};

const mapStateToProps = state => {
  return {
    item: state.shopItem.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: data => dispatch(addShopItem(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopAddContainer);
