import React from 'react';
import { connect } from 'react-redux';
import { fetchShopItem, updateShopItem } from '../actions/shopItem';
import ShopItem from '../components/ShopItem';

class ShopEditContainer extends React.Component {

  componentDidMount() {
    if (this.props.match.params.id) {
      fetchShopItem(this.props.match.params.id);
    }
  };

  render() {
    if (this.props.isFetching) {
      return (
        <ShopEdit
          {...this.props}
        />
      );
    } else {
      return (
        <div>Loading ...</div>
      );
    }
  }
};

const mapStateToProps = (state, ownProps) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopEditContainer);
