import React from 'react';
import { tripFilter } from '../../../../data/trip-options';
import { useSearchParams } from 'react-router';
import './Form.css';

const Form = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  const parseArray = (section) => {
    const current = searchParams.get(section);
    const parsedArray = current === null ? [] : current.split(',');
    return parsedArray;
  };
  const location = searchParams.get('location');
  const difficulty = searchParams.get('difficulty');
  const length = searchParams.get('length');
  const terrain = parseArray('terrain');

  const updateSimpleParams = (key, value) => {
    let params = new URLSearchParams(searchParams);
    params.set(key, value.toString());
    setSearchParams(params);
  };
  const updateArrayParams = (key, listOfValues) => {
    let params = new URLSearchParams(searchParams);
    if (listOfValues.length > 0) {
      params.set(key, listOfValues.join(','));
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
    const selectedItems = parseArray(section);
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
          value={location}
          onChange={(e) => handleChange(e)}
        >
          {tripFilter.locations.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="difficulty">Obtížnost</label>
        <select
          name="difficulty"
          value={difficulty}
          onChange={(e) => handleChange(e)}
        >
          {tripFilter.difficulty.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="length">Délka</label>
        <select name="length" value={length} onChange={(e) => handleChange(e)}>
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
            <input
              type="checkbox"
              name={item}
              checked={terrain.includes(item)}
              onChange={() => handleCheckboxChange('terrain', item)}
            />
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
        <label htmlFor="suitableFor">Vhodné pro</label>
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
