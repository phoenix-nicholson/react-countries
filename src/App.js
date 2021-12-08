import { useState, useEffect } from 'react';
import './App.css';
import { getCountries } from './country/country';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchData();
  }, []);
  function filterCountries() {
    return countries.filter((country) => {
      return (
        country.name.includes(query) && (country.continent === continent || continent === 'All')
      );
    });
  }

  return (
    <div className="App">
      <h1>Countries and Their Flags</h1>
      <input
        placeholder="Search Countries"
        type="text"
        value={query}
        onInput={(e) => {
          setQuery(e.target.value);
        }}
      />
      <select value={continent} onInput={(e) => setContinent(e.target.value)}>
        <option value="All">All</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="Antarctica">Antarctica</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
      </select>
      {filterCountries().map((c) => (
        <p key={c.id}>
          <img src={`https://flagcdn.com/24x18/${c.iso2.toLowerCase()}.png`} />
          {c.name} : {c.continent}
        </p>
      ))}
    </div>
  );
}

export default App;
