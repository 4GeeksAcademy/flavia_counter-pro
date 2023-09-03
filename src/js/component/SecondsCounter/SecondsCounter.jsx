import React, { useState, useEffect } from "react";
import "./style.css";

const SecondsCounter = () => {
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    const six = Math.floor(counter / 100000) % 10;
    const five = Math.floor(counter / 10000) % 10;
    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter / 1) % 10;
  
    return (
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
    );
  };

export default SecondsCounter;