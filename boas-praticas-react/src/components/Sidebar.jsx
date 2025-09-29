import MenuButton from "./MenuButton";
import Search from "./Search";

export default function Sidebar({ sections, activeSection, setActiveSection, query, setQuery }) {
  return (
    <aside className="sidebar">
      {/* Imagem superior */}
      <div className="sidebar-image top">
       <img src="/images/sejusclogo.png" alt="Logo SEJUSC" />
      </div>

      {/* Caixa de pesquisa */}
      <Search query={query} setQuery={setQuery} />

      {/* Menu */}
      <nav id="menu">
        {Object.keys(sections).map((key) => (
          <MenuButton
            key={key}
            label={sections[key].title}
            sectionKey={key}
            active={activeSection === key}
            onClick={setActiveSection}
          />
        ))}
      </nav>

      {/* Imagem inferior */}
      <div className="sidebar-image bottom">
<img src="/images/logogt.png" alt="Logo GTI" />
      </div>
    </aside>
  );
}
