import React, {useState} from "react";
import SecondsCounter from "./SecondsCounter";
import CountdownTimer from "./CountdownTimer";
import "./app.css"

const App = () => {
  const [initialCount, setInitialCount] = useState(0); // Valor inicial predeterminado

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value); // Parsear a número entero
    setInitialCount(isNaN(newValue) ? 0 : newValue); // Si no es un número válido, establecer en 0
  };

  return (
    <div>
      <SecondsCounter />
      <div className="inputContainer">
        <label>Ingresa un valor para el countdown</label> &nbsp;&nbsp;
        <input
          type="number"
          value={initialCount}
          onChange={handleInputChange}
          placeholder="Ingresa un valor inicial"
        />
      </div>
      <CountdownTimer initialCount={initialCount} />
    </div>
  );
};

export default App;
