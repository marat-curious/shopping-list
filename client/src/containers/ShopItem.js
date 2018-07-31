import React from 'react';
import { connect } from 'react-redux';
import { fetchShopItem, updateShopItem } from '../actions/shopItem';
import ShopItem from '../components/ShopItem';

class ShopItemContainer extends React.Component {

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.get();
    }
  };

  render() {
    if (this.props.isFetching) {
      return (
        <div>Loading ...</div>
      );
    } else {
      return (
        <ShopItem
          {...this.props}
        />
      );
    }
  }
};

const mapStateToProps = state => {
  return {
    item: state.shopItem.data,
    isFetching: state.shopItem.isFetching
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    get: () => dispatch(fetchShopItem(ownProps.match.params.id)),
    update: data => dispatch(updateShopItem(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopItemContainer);
