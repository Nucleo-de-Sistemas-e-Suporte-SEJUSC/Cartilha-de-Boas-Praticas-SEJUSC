// src/components/Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems, gtiCard } from "../components/SidebarConfig";
import "../styles/Sidebar.css";
import Search from "./Search";
import SEJUSC from '../assets/SEJUSC.png';

const SidebarItem = ({
  title,
  path,
  icon,
  subItems,
  isActive,
  onClick,
  query,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // 👉 Só permite abrir/fechar manualmente se não estiver pesquisando
  const toggleOpen = () => {
    if (!query) setIsOpen(!isOpen);
  };

  // 👉 Durante a busca, só mostra subitens se eles forem os filtrados
  const shouldShowSubItems =
    (!query && isOpen && subItems) || (query && subItems?.length > 0);

  return (
    <div className="sidebar-item-container">
      <div className="sidebar-item-main" onClick={toggleOpen}>
        <Link
          to={path}
          onClick={() => onClick(path)}
          className={`sidebar-item ${isActive ? "active" : ""}`}
        >
          <div className="sidebar-icon">{icon}</div>
          <span className="sidebar-item-title">{title}</span>
        </Link>
      </div>

      {shouldShowSubItems && (
        <div
          className={`sidebar-subitems ${
            query ? "search-result" : isOpen ? "open" : ""
          }`}
        >
          {subItems.map((sub) => (
            <Link
              key={sub.title}
              to={sub.path}
              onClick={() => onClick(sub.path)}
              className={`sidebar-subitem ${
                isActive === sub.path ? "active" : ""
              }`}
            >
              {sub.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const GTICard = ({ card }) => (
  <Link to={card.path} className="gti-card-link">
    <div className="gti-card">
      <div className="gti-icon">{card.icon}</div>
    </div>
  </Link>
);

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const [activePath, setActivePath] = useState(null);

  const handleItemClick = (path) => {
    setActivePath(path);
    setQuery(""); // limpa a busca ao clicar
  };

  // 🔍 Filtro inteligente — busca em títulos, subitens e keywords
  const filteredItems = menuItems
    .map((item) => {
      if (!query) return item;

      const lowerQuery = query.toLowerCase();
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const keywordMatch =
        item.keywords &&
        item.keywords.some((kw) => kw.toLowerCase().includes(lowerQuery));

      const matchedSubItems =
        item.subItems?.filter((sub) =>
          sub.title.toLowerCase().includes(lowerQuery)
        ) || [];

      // Se o item principal ou algum subitem der match → mantém
      if (titleMatch || keywordMatch || matchedSubItems.length > 0) {
        return {
          ...item,
          // 🔹 durante a busca, mostra SOMENTE subitens correspondentes
          subItems: matchedSubItems.length > 0 ? matchedSubItems : [],
        };
      }

      return null;
    })
    .filter(Boolean);

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="sidebar-app-title">
          <img src={SEJUSC} alt="Logo SEJUSC" className="header-logo" />
        </div>

        <Search query={query} setQuery={setQuery} />
      </div>

      <nav className="sidebar-menu-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <SidebarItem
              key={item.path}
              {...item}
              isActive={activePath === item.path}
              onClick={handleItemClick}
              query={query}
            />
          ))
        ) : (
          <p className="no-results">Nenhum resultado encontrado.</p>
        )}
      </nav>

      <div className="sidebar-footer">
        <GTICard card={gtiCard} />
      </div>
    </div>
  );
};

export default Sidebar;
