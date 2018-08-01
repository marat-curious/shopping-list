import React from 'react';
import { connect } from 'react-redux';
import { fetchCategoryList } from '../actions/categoryList';
import { deleteCategoryItem } from '../actions/categoryItem';
import CategoryList from '../components/CategoryList';

class CategoryListContainer extends React.Component {
  
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
        <CategoryList {...this.props} />
      );
    }
  }

};

const mapStateToProps = state => {
  return {
    list: state.categoryList.data,
    isFetching: state.categoryList.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: () => dispatch(fetchCategoryList()),
    remove: id => dispatch(deleteCategoryItem(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListContainer);
