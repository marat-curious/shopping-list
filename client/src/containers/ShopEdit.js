import React from 'react';
import { connect } from 'react-redux';
import {
  fetchShopList,
  fetchShopListItem,
  updateShopName
} from '../actions/shop';
import ShopEdit from '../components/ShopEdit';

class ShopEditContainer extends React.Component {

  componentDidMount() {
    fetchShopListItem(this.props.match.params.id);
  };

  render() {
    if(this.props.item && Object.keys(this.props.item).length === 0) {
      return (
        <div>Loading ...</div>
      );
    } else {
      return (
        <ShopEdit
          {...this.props}
        />
      );
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.shop.item
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    get: dispatch(fetchShopListItem(ownProps.match.params.id)),
    update: data => dispatch(updateShopName(data)),
    list: () => dispatch(fetchShopList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopEditContainer);
