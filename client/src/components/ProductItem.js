// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Check from '../assets/icons/check_circle.svg';
import Arrow from '../assets/icons/down_arrow.svg';
import '../styles/edit.css';
import '../styles/list.css';

const selectStyle = {
  background: 'no-repeat center right/20px url(' + Arrow + ')',
};

const CategoryList = props => {
  return props.categories.map(item =>
    <option
      key={item._id}
      value={item.name}
    >
      {item.name}
    </option>
  );
};

class ProductItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      _id: props.item._id ? props.item._id : '',
      name: props.item.name ? props.item.name : '',
      category: (props.categories && props.categories.length > 0) ? props.categories[0].name : ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.update(this.state);
    this.props.history.push('/product');
  }

  render() {
    return (
      <div className="page">
        <Header
          title="Название"
          back="/product"
        />
        <form
          className="edit"
          onSubmit={this.handleSubmit}
        >
          <div className="list__select list__select_categories">
            <select
              onChange={(event) => this.setState({ category: event.target.value })}
              style={selectStyle}
            >
              <CategoryList
                categories={this.props.categories}
              />
            </select>
          </div>
          <input
            type="text"
            name="name"
            className="edit__input"
            placeholder="Название"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="edit__button"
          >
            <img
              src={Check}
              alt=""
            />
          </button>
        </form>
      </div>
    );
  }
};

export default withRouter(ProductItem);
