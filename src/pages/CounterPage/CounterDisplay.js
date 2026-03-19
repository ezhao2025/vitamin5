import React from "react";

// Receives counter as a prop
function CounterDisplay({ counter }) {
  return (
    <div>
      <h2>Counter Value: {counter}</h2>
    </div>
  );
}

export default CounterDisplay;