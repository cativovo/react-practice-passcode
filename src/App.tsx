import { useState } from "react";
import "./App.css";

const numbers = [...Array.from({ length: 9 }, (_, i) => i + 1), 0];
const passcode = "3892";

function App() {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = (num: number) => () => {
    const input = selected + num;
    if (input.length > passcode.length) {
      setSelected(num.toString());
      setError("");

      return;
    }

    setSelected(input);

    if (input.length === passcode.length && input !== passcode) {
      setError("Invalid passcode");
    }
  };

  if (selected === passcode) {
    return <div>Success</div>;
  }

  return (
    <div className="container">
      <div className={"input-display" + (error !== "" ? " error" : "")}>
        {"*".repeat(selected.length)}
      </div>
      <div className="numpad">
        {numbers.map((num) => (
          <button key={num} type="button" onClick={handleButtonClick(num)}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
