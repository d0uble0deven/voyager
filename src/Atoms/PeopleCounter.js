import React, { useState } from "react";
import "./PeopleCounter.css";

function PeopleCounter({ initialCount, onCountChange, onClose }) {
  const [count, setCount] = useState(initialCount);

  const handleCountChange = (change) => {
    const newCount = Math.max(1, count + change);
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div className="people-counter-modal">
      <h2>Number of People</h2>
      <div className="counter-controls">
        <button onClick={() => handleCountChange(-1)} disabled={count === 1}>
          -
        </button>
        <span>{count}</span>
        <button onClick={() => handleCountChange(1)}>+</button>
      </div>
      <button onClick={onClose} className="close-button">
        Close
      </button>
    </div>
  );
}

export default PeopleCounter;
