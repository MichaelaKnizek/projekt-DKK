import './InfoTile.css';

import React from 'react';

const InfoTile = ({ title, number, measure }) => {
  return (
    <div className="info-tile">
      <p className="info-tile__title">{title}</p>
      <p className="info-tile__number">
        {number} {measure}
      </p>
    </div>
  );
};

export default InfoTile;
