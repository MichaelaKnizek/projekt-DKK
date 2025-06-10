import { NavLink } from 'react-router';
import './ResultsCard.css';

import React from 'react';

const ResultsCard = ({
  name,
  img,
  id,
  filter,
  length,
  duration,
  elevation,
  difficulty,
}) => {
  return (
    <>
      <NavLink to={`/detail?id=${id}`} className="results-card">
        <img className="results-card__image" src={img} alt="" />
        <div>
          <p className="results-card__name">{name}</p>
          <p className="results-card__difficulty">{difficulty}</p>
          <div className="results-card__info">
            <p className="results-card__length">{length} km</p>
            <p className="results-card__duration">{duration} h</p>
            <p className="results-card__elevationgain">{elevation} m</p>
          </div>
          <button className="results-card__detail" href="#">
            Chci sem
          </button>
          {/* jako a nebo button? */}
        </div>
      </NavLink>
    </>
  );
};

export default ResultsCard;
