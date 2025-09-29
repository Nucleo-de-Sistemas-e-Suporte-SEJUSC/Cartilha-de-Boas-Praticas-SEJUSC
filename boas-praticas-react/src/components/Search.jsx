export default function Search({ query, setQuery }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Pesquise aqui..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="search-circle">🔍</div>
    </div>
  );
}
