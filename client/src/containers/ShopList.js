import React from 'react';
import { connect } from 'react-redux';
import { fetchShopList } from '../actions/shopList';
import { deleteShopItem } from '../actions/shopItem';
import ShopList from '../components/ShopList';

class ShopListContainer extends React.Component {

  componentDidMount() {
    fetchShopList();
  };

  render() {
    if (this.props.isFetching) {
      return (
        <div>Loading ...</div>
      );
    } else {
      if (this.props.list) {
        return (
          <ShopList {...this.props} />
        );
      } else {
        return (
          <div>ERROR</div>
        );
      };
    }
  };
};

const mapStateToProps = state => {
  return {
    list: state.shopList.data,
    isFetching: state.shopList.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: () => dispatch(fetchShopList()),
    remove: id => dispatch(deleteShopItem(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopListContainer);
