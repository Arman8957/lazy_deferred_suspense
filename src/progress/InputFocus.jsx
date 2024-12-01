import React, { useRef, useState } from "react";

function Stopwatch() {
  const timerRef = useRef(0); // Ref to store the timer value
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null); // Ref to store the interval ID

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      timerRef.current += 1; // Increment the timerRef value
      setCount(timerRef.current); // Update state to display the timer
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current); // Clear the interval
  };

  return (
    <div>
      <h1>Timer: {count}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Stopwatch;
