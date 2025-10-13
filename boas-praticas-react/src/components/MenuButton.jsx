export default function MenuButton({ label, sectionKey, active, onClick }) {
  const imagePath = active
    ? `/images/menu/${sectionKey}-active.png`
    : `/images/menu/${sectionKey}.png`;

  return (
    <button
      className={`menu-button ${active ? "active" : ""}`}
      onClick={() => onClick(sectionKey)}
    >
      <img
        src={imagePath}
        alt={label}
        className="menu-icon"
        title={label}
      />
    </button>
  );
}
