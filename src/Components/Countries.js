import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getCountriesData } from '../Redux/countries/countries';
import Dropdown from './Dropdownfilter';
import { filterByKey } from '../Redux/countries/countries';



const Countries = () => {
 const dispatch = useDispatch();

 let countries = useSelector((state) => state.countries.countryList)

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountriesData());
    }
  }, []);

  // const cache = {};
  // countries.forEach((element) => {
  //   cache[element.name.common.replace(/\s+/gi, '-')] = cache[element.name.common.replace(/\s+/gi, '-')] + 1 || 1;
  // });
  const handleSortList = (e) =>{
   let key = e.target.value
    dispatch(filterByKey(key));
  }

  return (
    <div className="list-container">
      <div className="drop-list">
        <Dropdown handleSortList ={handleSortList} />
      </div>
      <ul className="country-list d-flex">
        {countries.map((country) => (
          <li className="d-flex" key={country.name.common.replace(/\s+/gi, '-')}>
            <div className="list-header d-flex">
              <div className="arrow-link d-flex">
                <Link to={`/countries/${country.name.common.replace(/\s+/gi, '-')}/details`}>
                  <FaArrowAltCircleRight />
                </Link>
              </div>
              <h2>
                {country.name.common}
                {' '}
                <span>{country.flag}</span>
              </h2>
            </div>
            <div className="list-body">
              <p>
                Capital:
                {country.capital}
              </p>
              <p>
                Population:
                {country.population}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
