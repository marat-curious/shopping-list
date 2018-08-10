// @flow

import React from 'react';
import { connect } from 'react-redux';
import { fetchCategoryList } from '../actions/categoryList';
//import { addProductItem } from '../actions/categoryItem';
import ProductItem from '../components/ProductItem';

class ProductAddContainer extends React.Component {

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
        <ProductItem {...this.props} />
      );
    }
  }
};

const mapStateToProps = state => {
  return {
    //item: state.categoryItem.data
    item: {},
    categories: state.categoryList.data,
    isCategoriesFetching: state.categoryList.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCategories: () => dispatch(fetchCategoryList()),
    //update: data => dispatch(addProductItem(data))
    update: data => dispatch((data) => console.log(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductAddContainer);
