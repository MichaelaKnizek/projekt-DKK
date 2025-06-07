import React from 'react';
import { tripFilter } from '../../../../data/trip-options';
import './Form.css';

const Form = () => {
  console.log(tripFilter.difficulty);
  return (
    <form>
      <label htmlFor="location">Lokalita</label>
      <select>
        {tripFilter.locations.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <label htmlFor="difficulty">Obtížnost</label>
      <select>
        {tripFilter.difficulty.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <label htmlFor="length">Délka</label>
      <select>
        {tripFilter.length.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <label>
        <input />
        Čas
      </label>
      <label htmlFor="features">Více možností</label>
      <select>
        {tripFilter.features.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </form>
  );
};

export default Form;
