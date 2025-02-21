import { useState } from "react";
import "./styles.css";

function DropdownMenu({ items: menuItems }) {
  const [showMenu, setShowMenu] = useState(false);
  const handleCursor = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      style={{ display: "inline-block", position: "relative" }}
    >
      <p
        style={{
          cursor: "pointer",
          margin: 0,
          padding: "8px",
          backgroundColor: "#f0f0f0",
          borderRadius: "4px",
        }}
      >
        Menu
      </p>
      {showMenu && (
        <ul
          style={{
            listStyle: "none",
            padding: "10px",
            margin: 0,
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            position: "absolute",
            top: "100%",
            left: 0,
            width: "120px",
            borderRadius: "4px",
          }}
        >
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
              onMouseDown={() => console.log(`Clicked: ${item}`)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function App() {
  const items = ["Profile", "Settings", "Logout"];

  return <DropdownMenu items={items} />;
}
