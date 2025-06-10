import { useSearchParams } from 'react-router';
import { trips } from '../../../data/trasy';
import './MapPage.css';

import React from 'react';

const MapPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const trip = trips.find((trip) => trip.id === id);

  return (
    <div className="map-page">
      <h1>{trip.name}</h1>
      <img src={trip.mapUrl} className="map-page__image" />
    </div>
  );
};

export default MapPage;
