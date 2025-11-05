// src/components/Search.js
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../components/SidebarConfig";
import "../styles/Search.css";

export default function Search({ query, setQuery }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const term = query.trim().toLowerCase();
    if (!term) return;

    let foundPath = null;

    for (const item of menuItems) {
      if (item.title.toLowerCase().includes(term)) {
        foundPath = item.path;
        break;
      }

      if (item.keywords?.some((kw) => kw.toLowerCase().includes(term))) {
        foundPath = item.path;
        break;
      }

      if (item.subItems) {
        for (const sub of item.subItems) {
          if (sub.title.toLowerCase().includes(term)) {
            foundPath = sub.path;
            break;
          }
        }
      }

      if (foundPath) break;
    }

    if (foundPath) {
      navigate(foundPath);
      setQuery(""); // limpa o campo de pesquisa
    } else {
      alert("Nenhum resultado encontrado.");
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Pesquisar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
