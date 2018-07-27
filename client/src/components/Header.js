import React from 'react';
import { withRouter } from 'react-router-dom';
import LeftArrowIcon from '../assets/icons/left_arrow.svg';
import PlusIcon from '../assets/icons/plus.svg';
import '../styles/header.css';

const Button = withRouter(({ history, position, link }) => (
  <button
    className={`header__button header__button_${position}`}
    onClick={() => { history.push(link) }}
  >
    <img
      src={ position === 'left' ? LeftArrowIcon : PlusIcon }
      className="header__icon"
      alt=""
    />
  </button>
));

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        { this.props.back &&
          <Button
            position="left"
            link={this.props.back}
          />
        }
        <h1 className="header_title">{ this.props.title }</h1>
        { this.props.add &&
          <Button
            position="right"
            link={this.props.add}
          />
        }
      </header>
    );
  }
};

export default Header;
