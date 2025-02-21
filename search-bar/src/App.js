import { useState } from "react";
import "./styles.css";

function SearchBar({ items }) {
  const [queryStr, setQueryStr] = useState("");
  const filteredItem = items.filter((item) =>
    item.toLowerCase().includes(queryStr.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={queryStr}
        placeholder="SearchBar..."
        onChange={(e) => setQueryStr(e.target.value)}
      />

      <ul>
        {filteredItem.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
export default function App() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  return <SearchBar items={items} />;
}
