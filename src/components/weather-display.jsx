export default function WeatherDisplay({ data }) {
  if (!data) {
    return <p>No weather to report. Search for a city!</p>;
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>Temperature: {Math.round(data.main.temp)}°F</p>
      <p>Feels like: {Math.round(data.main.feels_like)}°F</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} mph</p>
    </div>
  );
}
