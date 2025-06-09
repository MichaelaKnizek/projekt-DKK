import InfoTile from './components/InfoTile';
import './DetailPage.css';

import React from 'react';

const DetailPage = () => {
  return (
    <div className="detail">
      <div className="detail-photo"></div>
      <p className="detail-heading">Jmeno trasy</p>
      <div className="detail-info">
        <InfoTile />
        <InfoTile />
        <InfoTile />
      </div>
      <div className="detail-description">
        <p className="detail-subheading">Popis trasy</p>
        <p className="detail-text">text</p>
      </div>
      <button className="detail-map">SEM CHCI</button>
    </div>
  );
};

export default DetailPage;
