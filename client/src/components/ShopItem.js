import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Check from '../assets/icons/check_circle.svg';
import '../styles/edit.css';

class ShopEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.item._id ? this.props.item._id : '',
      _name: this.props.item.name ? this.props.item.name : '',
      name: this.props.item.name ? this.props.item.name : ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({ name: event.target.value });
  };

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.update(this.state);
    await this.props.list();
    this.props.history.push('/shop');
  };

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

export default withRouter(ShopEdit);
