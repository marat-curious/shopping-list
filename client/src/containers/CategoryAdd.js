// @flow

import React from 'react';
import { connect } from 'react-redux';
import { addCategoryItem } from '../actions/categoryItem';
import CategoryItem from '../components/CategoryItem';

class CategoryAddContainer extends React.Component {
  render() {
    return (
      <CategoryItem
        {...this.props}
      />
    );
  }
};

const mapStateToProps = state => {
  return {
    item: state.categoryItem.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: data => dispatch(addCategoryItem(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAddContainer);
