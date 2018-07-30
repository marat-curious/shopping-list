import React from 'react';
import { connect } from 'react-redux';
import { fetchShopList, deleteShop } from '../actions/shop';
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
    list: state.shop.list,
    isFetching: state.shop.isListFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: dispatch(fetchShopList()),
    remove: id => dispatch(deleteShop(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopListContainer);
