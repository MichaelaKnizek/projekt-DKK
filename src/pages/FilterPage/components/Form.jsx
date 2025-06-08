import React from 'react';
import { tripFilter } from '../../../../data/trip-options';
import { useSearchParams } from 'react-router';
import { NavLink } from 'react-router';
import { readFilterValues } from '../../../utils';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Checkbox from '@mui/joy/Checkbox';
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  ListItem,
} from '@mui/joy';
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
  const handleChange = (key, value) => {
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
  //console.log(formValues);
  return (
    <form className="form">
      <div className="form_item">
        <label className="input_title" htmlFor="location">
          Lokalita
        </label>
        <Select
          variant="soft"
          name="location"
          value={formValues.location}
          onChange={(e, value) => handleChange('location', value)}
        >
          {tripFilter.locations.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </div>
      <div className="form_item">
        <label htmlFor="difficulty" className="input_title">
          Obtížnost
        </label>
        <Select
          variant="soft"
          name="difficulty"
          value={formValues.difficulty}
          onChange={(e, value) => handleChange('difficulty', value)}
        >
          {tripFilter.difficulty.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </div>
      <div className="form_item">
        <label htmlFor="lengthRange" className="input_title">
          Délka
        </label>
        <Select
          variant="soft"
          name="lengthRange"
          value={formValues.lengthRange}
          onChange={(e, value) => handleChange('lengthRange', value)}
        >
          {tripFilter.lengthRange.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </div>

      <AccordionGroup variant="soft">
        <Accordion>
          <AccordionSummary className="input_title">Terén</AccordionSummary>
          <AccordionDetails className="input_box">
            {tripFilter.terrainType.map((item) => (
              <Checkbox
                key={item}
                className="input_details"
                variant="soft"
                label={<img src={`/icons/${item}.png`}></img>}
                checked={formValues.terrain?.includes(item)}
                onChange={() => handleCheckboxChange('terrain', item)}
                disableIcon
              ></Checkbox>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary className="input_title">
            Více možností
          </AccordionSummary>
          <AccordionDetails>
            {tripFilter.features.map((item) => (
              <Checkbox
                key={item}
                variant="soft"
                label={<img src={`/icons/${item}.png`}></img>}
                checked={formValues.features?.includes(item)}
                onChange={() => handleCheckboxChange('features', item)}
                disableIcon
              ></Checkbox>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>Vhodné pro</AccordionSummary>
          <AccordionDetails>
            {tripFilter.suitableFor.map((item) => (
              <Checkbox
                key={item}
                variant="soft"
                label={<img src={`/icons/${item}.png`}></img>}
                checked={formValues.suitableFor?.includes(item)}
                onChange={() => handleCheckboxChange('suitableFor', item)}
                className="checkbox-item"
                disableIcon
              ></Checkbox>
            ))}
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
      <NavLink to={`/result?${searchParams.toString()}`}>Vybrat</NavLink>
    </form>
  );
};

export default Form;
