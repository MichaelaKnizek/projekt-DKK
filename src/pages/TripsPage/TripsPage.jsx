import './TripsPage.css';
import Header from '../components/Header';
import TripCard from './components/TripCard';

const TripsPage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <div className="trip__page">
          <TripCard />
        </div>
      </main>
    </div>
  );
};

export default TripsPage;
