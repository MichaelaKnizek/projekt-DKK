import './style.css';
import { NavLink } from 'react-router';

export const HomePage = () => {
  return (
    <div className="homepage-photo">
      <header>
        <h1 className="homepage-title">Do kopce v klidu</h1>
      </header>
      <nav className="navlink">
        <NavLink to="/trips" className="btn">
          Chci připravený výlet
        </NavLink>
        <NavLink to="/filter" className="btn">
          Chci jít vlastní cestou
        </NavLink>
      </nav>
    </div>
  );
};
