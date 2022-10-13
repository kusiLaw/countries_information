import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import detail, { getDetails } from '../Redux/Details/detail';
import './style/countryDetails.css';

const CountryDetails = () => {
  const { name } = useParams();
  const details = useSelector((state) => state.details.countryDetails);
  const dispatch = useDispatch();
  // console.log(name.replace(/-+/gi, ' '))
  console.log(details);

  useEffect(() => {
    dispatch(getDetails(name.replace(/-+/gi, ' ')));
  }, []);

  const renderDetails = () => details.map((el) => (
    <>
      <div className="details-wrapper">
        <h1>
          {el.name}
          {' '}
          <span>
            Official name  :
            {' '}
            {' '}
            {el.officialName}
          </span>
        </h1>
        <div className="details-body">
          <h2>Information</h2>
          <div className="details-body-wrapper d-flex">
            <div className="details d-flex-col">
              <h3>Details</h3>
              <p key="ind">
                Independent :
                {el.independent ? 'Yes' : 'No'}
              </p>
              <p key="un">
                UN member :
                {el.unMember ? 'Yes' : 'No'}
              </p>
              <p key="el.capital">
                Capital City :
                {el.capital || 'unknown'}
              </p>
              <p key="cur">
                Currencies :
                {el.currencies[`${Object.keys(el.currencies)[0]}`].name}
                <span>
                  {' '}
                  '&quot'
                  {console.log(el.currencies[`${Object.keys(el.currencies)[0]}`].symbol)}
                  '&quot'
                </span>

              </p>

              <p key="el.population">
                Population :
                {el.population || 'unknown'}
              </p>
              <p key="el.timezones">
                Timezone :
                {el.timezones || 'unknown'}
              </p>
              <p key="el.continents">
                Continents :
                {el.continents || 'unknown'}
              </p>
            </div>
            <div className="flags d-flex-col">
              <h3>Flag</h3>
              <img src={el.flag} alt="flag" />
            </div>
          </div>
        </div>

      </div>
      {/* <div /> */}
      {/* <Home /> */}
    </>
  ));

  return (
    <div className="details-container">
      {details && (renderDetails())}
      {!details && (<>Error</>)}
    </div>
  );
};

export default CountryDetails;
