import React, { useState, useEffect } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

function CounterPage() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  useEffect(() => {
    if (counter < 0) {
      setCounter(0);
    }
  }, [counter]);

  useEffect(() => {
    if (counter > 5) {
      console.log("Counter is greater than 5!");
    }
  }, [counter]);

  return (
    <div>
      <CounterDisplay counter={counter} />

      <CounterControls increment={increment} decrement={decrement} />

      {counter > 5 && (
        <p style={{ color: "green" }}>
          Counter is greater than 5!
        </p>
      )}
    </div>
  );
}

export default CounterPage;