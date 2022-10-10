import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const countries = useSelector((state) => state.countries);
  console.log(countries);

  return (
    <div className="App" />
  );
}

export default App;
