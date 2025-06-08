import { NavLink } from 'react-router';
import './TripCard.css';

import React from 'react';

const TripCard = ({ name, filter, location }) => {
  return (
    <NavLink to={`/result${filter}&location=${location}`} className="trip-card">
      <img className="trip-card__image"></img>
      <p className="trip-card__name">{name}</p>
    </NavLink>
  );
};

export default TripCard;
