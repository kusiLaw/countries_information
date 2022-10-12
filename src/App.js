import './App.css';
import { Routes, Route } from 'react-router-dom';
import Countries from './Components/Countries';
import CountryDetails from './Components/Country_details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/countries/:name/details" element={<CountryDetails />} />
      <Route path="*" element={<h1>Oops page not found</h1>} />
    </Routes>

  );
}

export default App;
