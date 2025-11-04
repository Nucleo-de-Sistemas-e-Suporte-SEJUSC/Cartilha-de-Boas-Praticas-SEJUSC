import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../components/SidebarConfig"; // caminho do seu arquivo
import "../styles/Search.css";

export default function Search({ query, setQuery }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = query.trim().toLowerCase();
    if (!searchTerm) return;

    let foundPath = null;

    // 🔍 1. Percorre todos os itens do menu
    for (const item of menuItems) {
      // 👉 Verifica se o título contém o termo
      if (item.title.toLowerCase().includes(searchTerm)) {
        foundPath = item.path;
        break;
      }

      // 👉 Verifica nas palavras-chave
      if (
        item.keywords &&
        item.keywords.some((kw) => kw.toLowerCase().includes(searchTerm))
      ) {
        foundPath = item.path;
        break;
      }

      // 👉 Verifica nos subitens (se existirem)
      if (item.subItems) {
        for (const sub of item.subItems) {
          if (sub.title.toLowerCase().includes(searchTerm)) {
            foundPath = sub.path;
            break;
          }
        }
      }

      if (foundPath) break;
    }

    // 🚀 Se achou algo, redireciona pra rota correspondente
    if (foundPath) {
      navigate(foundPath);
      setQuery(""); // limpa o campo
    } else {
      alert("Nenhuma página encontrada com esse termo.");
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
