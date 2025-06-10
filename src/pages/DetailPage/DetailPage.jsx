import { useSearchParams } from 'react-router';
import InfoTile from './components/InfoTile';
import { trips } from '../../../data/trasy';
import './DetailPage.css';

import React from 'react';

const DetailPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const trip = trips.find((trip) => trip.id === id);

  return (
    <div className="detail">
      <div className="detail-photo"></div>
      <p className="detail-heading">{trip.name}</p>
      <div className="detail-info">
        <InfoTile title="Délka" number={trip.lengthKm} measure="km" />
        <InfoTile title="Převýšení" number={trip.elevationGainM} measure="m" />
        <InfoTile title="Čas" number={trip.durationH} measure="h" />
      </div>
      <div className="detail-description">
        <p className="detail-subheading"></p>
        <p className="detail-text">{trip.description}</p>
      </div>
      <button className="detail-map">SEM CHCI</button>
    </div>
  );
};

export default DetailPage;
