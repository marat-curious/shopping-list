import React from 'react';
import { connect } from 'react-redux';
import { fetchShopListItem } from '../actions/shop';
import ShopEdit from '../components/ShopEdit';

class ShopEditContainer extends React.Component {
  
  componentDidMount() {
    fetchShopListItem(this.props.match.params.id);
  };

  render() {
    if(Object.keys(this.props.item).length === 0) {
      return (
        <div>Loading ...</div>
      );
    } else {
      return (
        <ShopEdit {...this.props} />
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
    update: dispatch(fetchShopListItem(ownProps.match.params.id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopEditContainer);
