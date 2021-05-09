import React from 'react';
import Button from './../shared/button-component/button.component';
import {Link} from 'react-router-dom';
import sellOrderIcon from './sellordericon.svg';
import './navbar.component.scss';

const NavBar: React.FunctionComponent = () => {
  return (
    <nav className="navbar-component">
      <ul className="items-group">
        <li className="nav-logo">
          <img src={sellOrderIcon} alt="Icon of the application" />
        </li>
        <Link to="/home">
          <li className="regular-item">Home</li>
        </Link>
        <Link to="/orders">
          <li className="regular-item">Orders list</li>
        </Link>
      </ul>

      <ul className="items-group">
        <li>
          <Button label={'New order'} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
