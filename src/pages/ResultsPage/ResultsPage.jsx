import React from 'react';
import { trips } from '../../../data/trasy';
import { useSearchParams } from 'react-router';
import { readFilterValues } from '../../utils.js';
const filterStringEqual = (trip, key, value) => {
  if (value === undefined) {
    return true;
  }
  return trip[key] === value;
};

const filterInterSection = (trip, key, values) => {
  console.log('trip', trip);
  if (values === undefined) {
    return true;
  }
  return values.some((value) => trip[key].includes(value));
};

const executeFilter = (trips, filterValues) => {
  return trips.filter((trip) => {
    return (
      filterStringEqual(trip, 'location', filterValues.location) &&
      filterStringEqual(trip, 'difficulty', filterValues.difficulty) &&
      filterStringEqual(trip, 'lengthRange', filterValues.lengthRange) &&
      filterInterSection(trip, 'terrainType', filterValues.terrainType) &&
      filterInterSection(trip, 'features', filterValues.features) &&
      filterInterSection(trip, 'suitableFor', filterValues.suitableFor)
    );
  });
};

const ResultsPage = () => {
  const [searchParams] = useSearchParams();
  const filterValues = readFilterValues(searchParams);
  //console.log(filterValues);
  const filterTrips = executeFilter(trips, filterValues);

  //console.log(filterTrips);
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
