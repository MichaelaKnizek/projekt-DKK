import { NavLink } from 'react-router';
import './ResultsCard.css';

import React from 'react';

const ResultsCard = ({ name, img, id, filter }) => {
  return (
    <>
      <NavLink to={`/detail?id=${id}`}>
        <div>
          <div>
            <img src={img} alt="" />
          </div>
          <h2>{name}</h2>
          <p href="#">Chci sem</p>
        </div>
      </NavLink>
    </>
  );
};

export default ResultsCard;
