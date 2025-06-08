import { NavLink } from 'react-router';
import './Header.css';

import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <p className="header__title">Vyber si svůj výlet</p>
      <nav className="navicons">
        <NavLink to="/filter" className="header__refresh"></NavLink>
        {/* <div className="header__home"></div> */}
        <a href="/" className="header__home"></a>
      </nav>
    </header>
  );
};

export default Header;
