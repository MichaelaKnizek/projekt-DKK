import React from 'react';
import { trips } from '../../../data/trasy';

const filterStringEqual = (trip, key, value) => {
  return trip[key] === value;
};

const executeFilter = () => {
  return trips.filter((trip) => {
    return (
      filterStringEqual(trip, 'location', 'Krkonoše') &&
      filterStringEqual(trip, 'difficulty', 'těžká')
    );
  });
};
const filterTrips = executeFilter(trips);

const ResultsPage = () => {
  return (
    <div>
      {filterTrips.map((trip) => (
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
