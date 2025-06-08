import './TripsPage.css';
import Header from '../components/Header';
import TripCard from './components/TripCard';

const TripsPage = () => {
  return (
    <div className="tripspage-photo">
      <div className="container">
        <Header />
        <div className="trips-list">
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
        </div>
      </div>
    </div>
  );
};

export default TripsPage;
