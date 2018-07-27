import React from 'react';
import LeftArrowIcon from '../assets/icons/left_arrow.svg';
import PlusIcon from '../assets/icons/plus.svg';
import '../styles/header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        { this.props.back &&
          <button className="header__button header__button_left">
            <img
              src={LeftArrowIcon}
              className="header__icon"
              alt=""
            />
          </button>
        }
        <h1 className="header_title">{ this.props.title }</h1>
        { this.props.add &&
          <button className="header__button header__button_right">
            <img
              src={PlusIcon}
              className="header__icon"
              alt=""
            />
          </button>
        }
      </header>
    );
  }
};

export default Header;
