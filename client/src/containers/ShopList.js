import React from 'react';
import { connect } from 'react-redux';
import { fetchShopList } from '../actions/shopList';
import { deleteShopItem } from '../actions/shopItem';
import ShopList from '../components/ShopList';

class ShopListContainer extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.update();
  }

  render() {
    if (this.props.isFetching) {
      return (
        <div>Loading ...</div>
      );
    } else {
      return (
        <ShopList {...this.props} />
      );
    }
  }

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
