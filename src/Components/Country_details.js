import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { getCountriesData } from '../Redux/countries/countries';
import './style/countryDetails.css'
// import Home from './style/map';
const CountryDetails = () => {
  const { name } = useParams();
  const countries = useSelector((state) => state.countries.countryList);
  const dispatch = useDispatch();


  useEffect(() => {
   // if (countries.length === 0) {
    dispatch(getCountriesData());
   // }
 }, []);

 const filterCountry = () => countries.filter((el) => (el.name.common.replace(/\s+/gi, '-') === name));


  const renderDetails = () => filterCountry().map((el, index) => (
    <>
      <div className = 'details-wrapper'>
        <h1>
            {el.name.common}
            {' '}
            <span>
              Official name  : {' '}
              {el.name.official}
            </span>
        </h1>
        <div className='details-body'>
          <h2>Information</h2>
          <div className='details-body-wrapper d-flex'>
           <div className='details d-flex-col'>
             <h3>Details</h3>
             <p key={'ind'}>
               Has independent :
               {el.independent ? 'Yes' : 'No'}
             </p>
             <p key={'un'}>
               UN member :
               {el.unMember ? 'Yes' : 'No'}
             </p>
             <p key={'el.capital'}>
               Capital City :
               {el.capital[0] || 'unknown'}
             </p>
             <p key={'cur'}>
               Currencies :
               {el.currencies.name}
               <span> '&quot'
                {el.currencies.symbol}
                '&quot'</span>
      
             </p>
             <p key={'el.languages.isl'}>
               Official Language :
               {el.languages.isl || 'unknown'}
             </p>
             <p key={'el.population' }>
               Population :
               {el.population || 'unknown'}
             </p>
             <p key={'el.timezones'}>
               Timezone :
               {el.timezones || 'unknown'}
             </p>
             <p key={'el.continents'}>
               Continents :
               {el.continents || 'unknown'}
             </p>
             <p key={'el.subregion'}>
               Subregion :
               {el.subregion || 'unknown'}
             </p>

           </div>
           <div className = 'flags d-flex-col'>
           <h3>Flag</h3>
            <img src={el.flags.svg} alt="flag" />
           </div>
           <div className = 'coat d-flex-col'>
            <h3>Coat Of Arms</h3>
            <img src={el.coatOfArms.svg} alt="coat of arms" />
           </div>
          </div>
        </div>
       
      </div>
      {/* <div /> */}
      {/* <Home /> */}
    </>
  ));

  return (
    <div className='details-container'>
      {countries && (renderDetails())}
      {!countries && (<>Error</>)}
    </div>
  );
};

export default CountryDetails;
