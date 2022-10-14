import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Dropdown = ({ handleSortList }) => {
  const countries = useSelector((state) => state.countries.searchKeys);

  const getSearchKeyList = () => (
    <select onChange={handleSortList} className="select_options">
      <option value="DEFAULT">All Countries</option>
      {countries.map((el) => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
  );

  return (
    <div>
      {getSearchKeyList()}
    </div>
  );
};

Dropdown.propTypes = {
  handleSortList: PropTypes.func.isRequired,
};

export default Dropdown;
