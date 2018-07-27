import React from 'react';
import { connect } from 'react-redux';
import { fetchShopList } from '../actions/shop';
import ShopList from '../components/ShopList';

class ShopListContainer extends React.Component {

  componentDidMount() {
    fetchShopList();
  };

  render() {
    if (this.props.list && this.props.list.length > 0) {
      return (
        <ShopList {...this.props} />
      );
    } else {
      return (
        <div>Loading ...</div>
      );
    }
  };

};

const mapStateToProps = state => {
  return {
    list: state.shop.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: dispatch(fetchShopList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopListContainer);
