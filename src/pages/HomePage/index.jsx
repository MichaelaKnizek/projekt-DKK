import './style.css';
import { NavLink } from 'react-router';

export const HomePage = () => {
  return (
    <div className="photo">
      <header>
        <h1>Do kopce v klidu</h1>
      </header>
      <main>
        <nav className="nav__btn">
          <NavLink to="/trips" className="btn">
            Chci připravený výlet
          </NavLink>
          <NavLink to="/filter" className="btn">
            Chci jít vlastní cestou
          </NavLink>
        </nav>
      </main>
    </div>
  );
};
