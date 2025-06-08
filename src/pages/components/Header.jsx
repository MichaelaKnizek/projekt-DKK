import './Header.css';

import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="header">
        <p className="header__title">Vyber si svůj výlet</p>
        <nav className="navicons">
          <div className="header__refresh">aaa</div>
          <div className="header__home">bbb</div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
