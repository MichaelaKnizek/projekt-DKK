import { NavLink } from 'react-router';
import './Header.css';

import React from 'react';

const Header = ({ showRefresh = true }) => {
  return (
    <header className="header">
      <p className="header__title">Vyber si svůj výlet</p>
      <nav className="navicons">
        {showRefresh && (
          <NavLink to="/filter" className="header__refresh"></NavLink>
        )}
        <a href="/" className="header__home" />
      </nav>
    </header>
  );
};

export default Header;
