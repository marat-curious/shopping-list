// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Check from '../assets/icons/check_circle.svg';
import '../styles/edit.css';

class CategoryItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      _id: props.item._id ? props.item._id : '',
      name: props.item.name ? props.item.name : ''
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
    this.props.history.push('/category');
  }

  render() {
    return (
      <div className="page">
        <Header
          title="Название"
          back="/shop"
        />
        <form
          className="edit"
          onSubmit={this.handleSubmit}
        >
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

export default withRouter(CategoryItem);
