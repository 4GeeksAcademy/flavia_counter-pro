import React, { useState, useEffect } from "react";
import "./countdownTimer.css";

const CountdownTimer = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount); // Actualiza el contador cuando initialCount cambie
  }, [initialCount]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div className="containerCountdown">
      <div className="countdownValue">{count}</div>
    </div>
  );
};

export default CountdownTimer;