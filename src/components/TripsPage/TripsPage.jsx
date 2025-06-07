import './TripsPage.css';

import React from 'react';
import TripCard from './components/TripCard';

const TripsPage = () => {
  return (
    <div className="container">
      <header>
        <h2>Vyber si svůj výlet</h2>
        <nav>
          <div className="refresh"></div>
          <div className="cross"></div>
        </nav>
      </header>
      <main>
        <div className="trip__page">
          <TripCard />
        </div>
      </main>
    </div>
  );
};

export default TripsPage;
