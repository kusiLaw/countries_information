import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import detail, { getDetails } from '../Redux/Details/detail';
import './style/countryDetails.css';

const CountryDetails = () => {
  const { name } = useParams();
  let details = useSelector((state) => state.details.countryDetails);
  const dispatch = useDispatch();
  // console.log(name.replace(/-+/gi, ' '))
 

  useEffect(() => {
    dispatch(getDetails(name.replace(/-+/gi, ' ')));
  }, []);

  if(details.length > 1){
   details =  [details[0]] //solved api inconsistent
  }

  const renderDetails = () => details.map((el) => (
    <>
      <div className="details-wrapper">
        <div className='details-header d-flex'>
         <div className="flags d-flex">
            <img src={el.flag} alt="flag" />
         </div>
         <div className='header-wrap d-flex'>
          <h1 >
            {/* <span> */}
             {el.name}
             {' '}
            {/* </span> */}
            <span>
              {' '}
              {' '}
              {el.region}
            </span>
          </h1>
         </div>
        </div>
        <div className="details-body">
          <h2>Detailed Information</h2>
          <div className="details-body-wrapper d-flex">
            <ul className="details">
             {/* <li key="el.continents">
               <p> Continents </p>
               <p>{el.continents || 'unknown'}</p>
             </li> */}

              <li key="el.timezone">
               <p> timezone </p>
               <p>{el.timezone || 'unknown'}</p>
              </li>
              <li key="ind">
               <p>Independent</p>
               <p>{el.independent ? 'Yes' : 'No'}</p>
              </li>
              <li key="un">
               <p>UN member</p>
               <p>{el.unMember ? 'Yes' : 'No'}</p>
              </li>
              <li key="el.capital">
              <p>Capital</p>
              <p>{el.capital || 'unknown'}</p>
              </li>
              <li key="cur">
              <p> Currencies</p>
              <p>
               {el.currencies[`${Object.keys(
               el.currencies)[0]}`].name }
                 {" "}
              {el.currencies[`${Object.keys(
               el.currencies)[0]}`].symbol 
              }
              </p>
              </li>
             
              <li key="el.population">
              <p>Population </p>
              <p>{el.population || 'unknown'}</p>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
      {/* <div /> */}
      {/* <Home /> */}
    </>
  ));

  return (
    <div className="details-container">
      {renderDetails() || (<>Error</>)}
    </div>
  );
};

export default CountryDetails;
