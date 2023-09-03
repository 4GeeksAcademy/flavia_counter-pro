import React, {useState} from "react";
import SecondsCounter from "./SecondsCounter";
import CountdownTimer from "./CountdownTimer";

const App = () => {
  return (
    <div>
      <SecondsCounter />
      <CountdownTimer />
    </div>
  );
};

export default App;
