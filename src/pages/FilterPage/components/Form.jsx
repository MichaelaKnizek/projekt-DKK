import React from 'react';
import { tripFilter } from '../../../../data/trip-options';
import './Form.css';

const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="location">Lokalita</label>
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
        <label>
          <input />
          Čas
        </label>
      </div>
      <div>
        <label htmlFor="terrain">Terén</label>
        {tripFilter.terrainType.map((item) => (
          <label>
            <input type="checkbox" name={item} />
            {item}
          </label>
        ))}
      </div>
      <div>
        <label htmlFor="features">Více možností</label>
        {tripFilter.features.map((item) => (
          <label>
            <input type="checkbox" name={item} />
            {item}
          </label>
        ))}
      </div>
      <div>
        <label htmlFor="features">Vhodné pro</label>
        {tripFilter.suitableFor.map((item) => (
          <label>
            <input type="checkbox" name={item} />
            {item}
          </label>
        ))}
      </div>
    </form>
  );
};

export default Form;
