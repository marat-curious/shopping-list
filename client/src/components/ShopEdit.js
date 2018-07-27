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
            value="Название"
            className="edit__input"
          />
          <input
            type="text"
            value=""
            placeholder="TEST"
            className="edit__input"
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
