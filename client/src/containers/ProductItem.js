// @flow

import React from 'react';
import { connect } from 'react-redux';
import { fetchProductItem, updateProductItem } from '../actions/productItem';
import { fetchCategoryList } from '../actions/categoryList';
import ProductItem from '../components/ProductItem';

class ProductItemContainer extends React.Component {

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.get();
      this.props.updateCategories();
    }
  };

  render() {
    if (this.props.isFetching) {
      return (
        <div>Loading ...</div>
      );
    } else {
      return (
        <ProductItem
          {...this.props}
        />
      );
    }
  }
};

const mapStateToProps = state => {
  return {
    item: state.productItem.data,
    isFetching: state.productItem.isFetching,
    categories: state.categoryList.data,
    isCategoriesFetching: state.categoryList.isFetching
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    get: () => dispatch(fetchProductItem(ownProps.match.params.id)),
    update: data => dispatch(updateProductItem(data)),
    updateCategories: () => dispatch(fetchCategoryList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemContainer);
