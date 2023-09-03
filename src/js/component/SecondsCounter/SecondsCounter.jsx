import React, { useState, useEffect } from "react";
import "./style.css";

const SecondsCounter = () => {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(true); // Estado para controlar si el contador está en marcha
    let intervalId;

    useEffect(() => {
      intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [isRunning]);

    const handleStopClick = () => {
      setIsRunning(false); // Detener el contador al hacer clic en el botón
    };

    useEffect(() => {
      if (!isRunning) {
        clearInterval(intervalId);
      }
    }, [isRunning]);

    const six = Math.floor(counter / 100000) % 10;
    const five = Math.floor(counter / 10000) % 10;
    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter / 1) % 10;
  
    return (
      <>
      {isRunning ? (
        <button onClick={handleStopClick}>Detener</button>
      ) : (
        <button disabled>Detenido</button>
      )}
      <div className="bigContainer">
        <div className="relojIcon">
          <i className="fa-regular fa-clock"></i>
        </div>
        <div className="sextoDigito">{six}</div>
        <div className="quintoDigito">{five}</div>
        <div className="cuartoDigito">{four}</div>
        <div className="tercerDigito">{three}</div>
        <div className="segundoDigito">{two}</div>
        <div className="primerDigito">{one}</div>
      </div>
      </>
    );
  };

export default SecondsCounter;