import React, { useRef, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const timerId = useRef(null);

  const handleClickAsync = () => {
    if (timerId.current) clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
  };

  return (
    <div>
      <div className="App">
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <span
          style={{
            margin: "10px 10px",
          }}
        >
          {count}
        </span>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
      <div
        className="App"
        style={{
          marginTop: "10px",
        }}
      >
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <span
          style={{
            margin: "10px 10px",
          }}
        >
          {count}
        </span>
        <button onClick={handleClickAsync}>+</button>
      </div>
    </div>
  );
}
