// @flow

import React from 'react';
import { connect } from 'react-redux';
import { fetchCategoryList } from '../actions/categoryList';
import { fetchProductList } from '../actions/productList';
import ProductList from '../components/ProductList';

class ProductListContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateCategories();
  }

  render() {
    if (this.props.isCategoriesFetching) {
      return (
        <div>Loading ...</div>
      );
    } else {
      return (
        <ProductList {...this.props} />
      );
    }
  }

};

const mapStateToProps = state => {
  return {
    categories: state.categoryList.data,
    isCategoriesFetching: state.categoryList.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCategories: () => dispatch(fetchCategoryList()),
    updateProducts: categoryId => dispatch(fetchProductList(categoryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
