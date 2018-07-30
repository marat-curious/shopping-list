import React from 'react';
import Header from './Header';
import Check from '../assets/icons/check_circle.svg';
import '../styles/edit.css';

class ShopEdit extends React.Component {
  render() {
    return (
      <div className="page">
        <Header
          title="Название"
          back="/shop"
        />
        <form
          className="edit"
        >
          <input
            type="text"
            className="edit__input"
            placeholder="Название"
            defaultValue={this.props.item.name ? this.props.item.name : ''}
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

export default ShopEdit;
