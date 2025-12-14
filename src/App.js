import { useState, useEffect } from "react";
import './App.css';
import SearchBar from "./components/search";
import WeatherDisplay from "./components/weather-display";

function App() {
  const [location, setLocation] = useState("");  // input field
  const [query, setQuery] = useState("");        // submitted
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    setQuery(location.trim());
  };

  useEffect(() => {
    if (!query) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = "4074e7d1c262d74e173cd8e47ea2c17a"

        console.log("Fetching URL:",`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&units=imperial&appid=${apiKey}`
      );



        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&units=imperial&appid=${apiKey}`

        );

        if (!response.ok) {
          throw new Error("City not found");
        }

        const data = await response.json();
        console.log("RAW API DATA:", data);
        setWeatherData(data);


        // const data = await response.json();
        // if (data.cod && data.cod !== 200) {
        //   throw new Error(data.message);
        // }
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [query]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Weathertime</h1>

        <SearchBar
          location={location}
          setLocation={setLocation}
          onSubmit={handleSearch}
        />

        {/* Temporary display to confirm submit */}
        <p>Submitted location: {query}</p>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <WeatherDisplay data={weatherData} />


        {/* <WeatherDisplay query={query} /> */}

      
      </header>
    </div>
  );
}

export default App;
