export default function MenuButton({ label, sectionKey, active, onClick }) {
  return (
    <button
      className={active ? "active" : ""}
      onClick={() => onClick(sectionKey)}
    >
      {label}
    </button>
  );
}
