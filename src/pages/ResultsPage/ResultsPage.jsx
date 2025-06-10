import React from 'react';
import { trips } from '../../../data/trasy';
import { NavLink, useSearchParams } from 'react-router';
import { readFilterValues } from '../../utils.js';
import Header from '../components/Header.jsx';
import './ResultsPage.css';
import ResultsCard from './ResultsCard.jsx';

const filterStringEqual = (trip, key, value) => {
  if (value === undefined) {
    return true;
  }
  return trip[key] === value;
};

const filterInterSection = (trip, key, values) => {
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
  console.log(filterTrips);
  return (
    <div className="resultspage-photo">
      <div className="results-container">
        <Header />
        <div className="results-list">
          {filterTrips.map((trip) => (
            <ResultsCard
              key={trip.id}
              name={trip.name}
              img={trip.imageUrl}
              id={trip.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
