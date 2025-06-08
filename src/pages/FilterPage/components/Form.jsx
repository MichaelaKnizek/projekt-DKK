import React from 'react';
import { tripFilter } from '../../../../data/trip-options';
import { useSearchParams } from 'react-router';
import { NavLink } from 'react-router';
import { readFilterValues } from '../../../utils';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import './Form.css';

const Form = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const formValues = readFilterValues(searchParams);
  //console.log(formValues);

  const updateSimpleParams = (key, value) => {
    let params = new URLSearchParams(searchParams);
    params.set(key, value.toString());
    setSearchParams(params);
  };
  const updateArrayParams = (key, listOfValues) => {
    let params = new URLSearchParams(searchParams);
    if (listOfValues.length > 0) {
      params.set(key, listOfValues.join(',') + ',');
    } else {
      params.delete(key);
    }
    console.log(params.keys());
    setSearchParams(params);
  };
  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    const key = e.target.name;
    const { value } = e.target;
    updateSimpleParams(key, value);
  };
  const handleCheckboxChange = (section, item) => {
    console.log(section, item);
    const selectedItems = formValues[section] ?? [];
    const updatedSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter((current) => current !== item)
      : [...selectedItems, item];
    updateArrayParams(section, updatedSelectedItems);
  };
  return (
    <form>
      <div>
        <label htmlFor="location">Lokalita</label>
        <select
          name="location"
          value={formValues.location}
          onChange={(e) => handleChange(e)}
        >
          {tripFilter.locations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="difficulty">Obtížnost</label>
        <select
          name="difficulty"
          value={formValues.difficulty}
          onChange={(e) => handleChange(e)}
        >
          {tripFilter.difficulty.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="lengthRange">Délka</label>
        <select
          name="lengthRange"
          value={formValues.length}
          onChange={(e) => handleChange(e)}
        >
          {tripFilter.lengthRange.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="terrain">Terén</label>
        {tripFilter.terrainType.map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              name={item}
              checked={formValues.terrain?.includes(item)}
              onChange={() => handleCheckboxChange('terrain', item)}
            />
            {item}
          </label>
        ))}
      </div>
      <div>
        <label htmlFor="features">Více možností</label>
        {tripFilter.features.map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              name={item}
              checked={formValues.features?.includes(item)}
              onChange={() => handleCheckboxChange('features', item)}
            />
            {item}
          </label>
        ))}
      </div>
      <div>
        <label htmlFor="suitableFor">Vhodné pro</label>
        {tripFilter.suitableFor.map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              name={item}
              checked={formValues.suitableFor?.includes(item)}
              onChange={() => handleCheckboxChange('suitableFor', item)}
            />
            {item}
          </label>
        ))}
      </div>
      <NavLink to={`/result?${searchParams.toString()}`}>Vybrat</NavLink>
    </form>
  );
};

export default Form;
