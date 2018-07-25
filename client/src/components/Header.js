import React from 'react';
import LeftArrowIcon from '../assets/icons/left_arrow.svg';
import PlusIcon from '../assets/icons/plus.svg';
import '../styles/header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <a
          href="#"
          className="header__icon header__icon_left"
        >
          <img
            src={LeftArrowIcon}
            alt="Назад"
          />
        </a>
        <h1 className="header_title">{ this.props.title }</h1>
        <a
          href="#"
          className="header__icon header__icon_right"
        >
          <img
            src={PlusIcon}
            alt="Добавить"
          />
        </a>
      </header>
    );
  }
};

export default Header;
