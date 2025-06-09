import './TripsPage.css';
import Header from '../components/Header';
import TripCard from './components/TripCard';
import { tripTypes } from '../../../data/trip-options';
import { useState } from 'react';
import { Select } from '@mui/joy';
import { Option } from '@mui/joy';
import { tripFilter } from '../../../data/trip-options';
import { useSearchParams } from 'react-router';

const TripsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultLocation = searchParams.get('location') || 'Jizerky';
  const [location, setLocation] = useState(defaultLocation);
  const handleChange = (value) => {
    setLocation(value);
    setSearchParams({ location: value });
  };
  return (
    <div className="tripspage-photo">
      <div className="container">
        <Header />
        <div className="form_item">
          <label className="input_title" htmlFor="location">
            Lokalita
          </label>
          <Select
            className="select_location"
            variant="soft"
            value={location}
            onChange={(e, value) => handleChange(value)}
          >
            {tripFilter.locations.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
        <div className="trips-list">
          {tripTypes.map((type) => (
            <TripCard
              name={type.name}
              filter={type.filter}
              location={location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripsPage;
