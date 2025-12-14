export default function SearchBar({ location, setLocation, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", location);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}




