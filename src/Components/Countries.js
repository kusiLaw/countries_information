import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getCountriesData, filterByKey } from '../Redux/countries/countries';
import Dropdown from './Dropdownfilter';

const Countries = () => {
  const dispatch = useDispatch();

  const countries = useSelector(
    (state) => state.countries.filteredCountries
  || state.countries.countryList,
  );

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountriesData());
    }
  }, []);

  // const cache = {};
  // countries.forEach((element) => {
  //   cache[element.name.common.replace(/\s+/gi, '-')] = cache[element.name.common.replace(/\s+/gi, '-')] + 1 || 1;
  // });
  const handleSortList = (e) => {
    const key = e.target.value;
    dispatch(filterByKey(key));
  };

  return (
    <div className="list-container">
      <div className="drop-list">
        <Dropdown handleSortList={handleSortList} />
      </div>
      <ul className="country-list d-flex">
        {countries.map((country) => (
          <li className="d-flex" key={country.name.common.replace(/\s+/gi, '-')}>
            <div className="list-header d-flex">
              <div className="arrow-link d-flex">
                <Link className='links' to={`/countries/${country.name.common.replace(/\s+/gi, '-')}/details`}>
                  <FaArrowAltCircleRight />
                </Link>
              </div>
              <div className='flag-wrap'>
               <div className='cover'></div>
               <img className='flag-img' src={`${country.flags.svg}`} alt='flag' />
              </div>
              
            </div>
            <div className="list-body d-flex">
            <h2>
                {country.name.common}
              </h2>
              <p>
                Pop :
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
