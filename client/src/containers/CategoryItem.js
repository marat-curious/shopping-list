// @flow

import React from 'react';
import { connect } from 'react-redux';
import { fetchCategoryItem, updateCategoryItem } from '../actions/categoryItem';
import CategoryItem from '../components/CategoryItem';

class CategoryItemContainer extends React.Component {

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.get();
    }
  };

  render() {
    if (this.props.isFetching) {
      return (
        <div>Loading ...</div>
      );
    } else {
      return (
        <CategoryItem
          {...this.props}
        />
      );
    }
  }
};

const mapStateToProps = state => {
  return {
    item: state.categoryItem.data,
    isFetching: state.categoryItem.isFetching
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    get: () => dispatch(fetchCategoryItem(ownProps.match.params.id)),
    update: data => dispatch(updateCategoryItem(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItemContainer);
