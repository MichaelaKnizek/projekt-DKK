import React from 'react';
import { tripFilter } from '../../../../data/trip-options';
import './Form.css';

const Form = () => {
  return (
    <form>
      <label htmlFor="location">Lokalita</label>
      <div>
        <select>
          {tripFilter.locations.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="difficulty">Obtížnost</label>
        <select>
          {tripFilter.difficulty.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="length">Délka</label>
        <select>
          {tripFilter.length.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        {' '}
        <label>
          <input />
          Čas
        </label>
      </div>
      <div>
        <label htmlFor="terrain">Terén</label>
        <select>
          {tripFilter.terrainType.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="features">Více možností</label>
        <select>
          {tripFilter.features.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default Form;
