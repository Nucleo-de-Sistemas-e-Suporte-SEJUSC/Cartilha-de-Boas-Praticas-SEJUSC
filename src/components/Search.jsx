// src/components/Search.js
import React from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/Search.css";

export default function Search({ query, setQuery }) {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Pesquisar..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}
