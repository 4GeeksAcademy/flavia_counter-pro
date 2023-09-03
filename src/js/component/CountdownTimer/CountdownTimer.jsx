import React, { useState, useEffect } from "react";
import "./countdownTimer.css";

const CountdownTimer = () => {
  const [initialCount, setInitialCount] = useState(null); // Valor inicial predeterminado
  const [count, setCount] = useState(initialCount);
  const [isRunning, setIsRunning] = useState(true);
  const [resetCount, setResetCount] = useState(0);
  const [preStopCount, setPreStopCount] = useState(0);

  let intervalId;

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value); 
    setInitialCount(isNaN(newValue) ? 0 : newValue); // Si no es un número válido, establecer en 0
  };

  // Este efecto actualiza el contador cuando initialCount cambia
  useEffect(() => {
    setCount(initialCount);
    setResetCount(initialCount); // Actualiza también el valor de reinicio
  }, [initialCount]);

  useEffect(() => {
    intervalId = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, count]);

  const handleStopClick = () => {
    setIsRunning(false);
    setPreStopCount(count);
  };

  useEffect(() => {
    if (!isRunning) {
      clearInterval(intervalId);
    } else if (count === 0) {
      // Mostrar una alerta cuando el contador llega a 0
      alert("¡Tu contador llegó a 0!");
    }
  }, [isRunning, count]);

  const handleRestartClick = () => {
    setIsRunning(true);
    setCount(resetCount);
  };

  const handleResumeClick = () => {
    setIsRunning(true);
    setCount(preStopCount);
  };

  return (
    <>
      <div className="containerEverything">
        <div className="inputContainer">
          <div>
            <label>Ingresa un valor para el countdown</label> &nbsp;&nbsp;
            <input
              type="number"
              value={initialCount}
              onChange={handleInputChange}
              placeholder="Ingresa un valor inicial"
            />
          </div>
          <div>
            {isRunning ? (
              <>
                <button
                  type="button"
                  className="btn btn-warning btn-sm me-2"
                  onClick={handleStopClick}
                >
                  Detener
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={handleRestartClick}
                >
                  Reiniciar
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm me-2"
                  disabled
                >
                  Detenido
                </button>
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  onClick={handleResumeClick}
                >
                  Reanudar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="containerCountdown">
        <div className="countdownValue">{count}</div>
      </div>
    </>
  );
};

export default CountdownTimer;
