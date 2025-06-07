import React from 'react';
import { trips } from '../../../data/trasy';

const ResultsPage = () => {
  return (
    <div>
      {trips.map((trip) => (
        <div key={trip.id}>
          <div>
            <img src={trip.imageUrl} alt="" />
          </div>
          <h2>{trip.name}</h2>
          <a href="#">Chci sem</a>
        </div>
      ))}
    </div>
  );
};

export default ResultsPage;
