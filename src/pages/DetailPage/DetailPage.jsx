import './DetailPage.css';

import React from 'react';

const DetailPage = () => {
  return (
    <div className="detailpage">
      <div className="detailpage-photo">fotka trasy</div>
      <p className="detailpage-title">Jmeno trasy</p>
      <div>dlazdice s info - komponenta</div>
      <div>
        <p className="detailpage-route">Popis trasy</p>
        <p className="detailpage-text">text</p>
      </div>
      <button className="detail-map">SEM CHCI</button>
    </div>
  );
};

export default DetailPage;
