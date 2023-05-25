import React, { useEffect, useState } from "react";
import "./App.css";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const password = "1634";

function App() {
  const [error, setError] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [pressedNumbers, setPressedNumbers] = useState<number[]>([]);

  useEffect(() => {
    if (pressedNumbers.length === 1) {
      setError("");
    } else if (pressedNumbers.length === password.length) {
      if (pressedNumbers.join("") === password) {
        console.log("correct password");
        setIsCorrect(true);
        setError("");
      } else {
        setError("wrong password");
      }
      setPressedNumbers([]);
    }
  }, [pressedNumbers]);

  return (
    <>
      {/* {JSON.stringify(pressedNumbers)} */}

      {isCorrect ? (
        <div>Success!</div>
      ) : (
        <div>
          {error}
          <div className="number-pad">
            {numbers.map((number, idx) => (
              <button
                className={number === 0 ? "zero" : ""}
                key={idx}
                onClick={() => {
                  setPressedNumbers((cur) => [...cur, number]);
                }}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
