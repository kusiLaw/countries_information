import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

export default Dropdown;
