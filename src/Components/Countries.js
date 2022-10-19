import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getCountriesData, filterByKey } from '../Redux/countries/countries';
import Dropdown from './Dropdownfilter';
import logo from '../assert/loading.gif';

const Countries = () => {
  const dispatch = useDispatch();

  const countries = useSelector(
    (state) => state.countries.filteredCountries
  || state.countries.countryList,
  );

  const Loading = useSelector(
    (state) => state.countries.Loading,
  );

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountriesData());
    }
  }, []);

  const handleSortList = (e) => {
    const key = e.target.value;
    dispatch(filterByKey(key));
  };

  if (Loading) {
    return (
      <div className="loading d-flex">
        <img src={logo} alt="loading" />
      </div>
    );
  }

  return (
    <div className="list-container" data-testid="listContainer">
      <div className="drop-list">
        <Dropdown handleSortList={handleSortList} />
      </div>
      <ul className="country-list d-flex">
        {countries.map((country) => (
          <li className="d-flex" key={country.name.replace(/\s+/gi, '-')}>
            <div className="list-header d-flex">
              <div className="arrow-link d-flex">
                <Link className="links" to={`/countries/${country.name.replace(/\s+/gi, '-')}/details`}>
                  <FaArrowAltCircleRight />
                </Link>
              </div>
              <div className="flag-wrap">
                <div className="cover" />
                <img className="flag-img" src={`${country.flag}`} alt="flag" />
              </div>

            </div>
            <div className="list-body d-flex">
              <h2>
                {country.name}
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
