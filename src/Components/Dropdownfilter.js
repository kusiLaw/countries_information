import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Dropdown = () => {
  const countries = useSelector((state) => state.countries.countryList);

  const getSearchKeyList = () => {
    if (countries.length > 0) {
      const region = [...new Set(countries.map((el) => (el.region)))];
      console.log(region);

      return (
        <select className="select_options">
          <option value="DEFAULT">All Countries</option>
          {region.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      );
    }
    return <></>;
  };

  return (
    <div>
      {getSearchKeyList()}
    </div>
  );
};

export default Dropdown;
