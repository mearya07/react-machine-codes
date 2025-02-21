import { useState } from "react";
import "./styles.css";

function ToggleBtn({ switchBtnFn, isOn }) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        value={isOn}
        onChange={() => switchBtnFn((state) => !state)}
      />
      <span className="slider"></span>
    </label>
  );
}

export default function App() {
  const [isOn, setIsOn] = useState(false);
  console.log(isOn, "**");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ToggleBtn switchBtnFn={setIsOn} isOn={isOn}></ToggleBtn>
    </div>
  );
}
