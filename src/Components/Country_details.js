import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { getCountriesData } from '../Redux/countries/countries';
import './style/countryDetails.css'

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


  const renderDetails = () => filterCountry().map((el) => (
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
             <p>
               Has independent :
               {el.independent ? 'Yes' : 'No'}
             </p>
             <p>
               UN member :
               {el.independent ? 'Yes' : 'No'}
             </p>
             <p>
               Capital City :
               {el.capital[0] || 'unknown'}
             </p>
             <p>
               Currencies :
               {el.currencies.name}
               <span> '&quot'
                {el.currencies.symbol}
                '&quot'</span>
      
             </p>
             <p>
               Official Language :
               {el.languages.isl || 'unknown'}
             </p>
             <p>
               Population :
               {el.population || 'unknown'}
             </p>
             <p>
               Timezone :
               {el.timezones || 'unknown'}
             </p>
             <p>
               Continents :
               {el.continents || 'unknown'}
             </p>
             <p>
               Region :
               {el.region || 'unknown'}
             </p>
             <p>
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
